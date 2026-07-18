export const BOOKING_TO = process.env.BOOKING_TO ?? "info@harbourviewdental.com";

export type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ValidationResult =
  | { ok: true; isHoneypot: true }
  | { ok: true; isHoneypot: false; data: BookingPayload }
  | { ok: false; error: string };

export function validateBooking(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const { name, email, phone, message, website } = body as Record<string, unknown>;

  // Honeypot, bots fill hidden fields
  if (typeof website === "string" && website.trim()) {
    return { ok: true, isHoneypot: true };
  }

  if (typeof name !== "string" || !name.trim()) {
    return { ok: false, error: "Please enter your name." };
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (typeof phone !== "string" || !phone.trim()) {
    return { ok: false, error: "Please enter your phone number." };
  }
  if (typeof message !== "string" || !message.trim()) {
    return { ok: false, error: "Please tell us how we can help." };
  }

  return {
    ok: true,
    isHoneypot: false,
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim()
    }
  };
}

export function bookingEmailHtml(data: BookingPayload) {
  const escaped = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  return `
    <h2>New appointment request</h2>
    <p><strong>Name:</strong> ${escaped(data.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escaped(data.email)}">${escaped(data.email)}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${escaped(data.phone)}">${escaped(data.phone)}</a></p>
    <p><strong>Message:</strong></p>
    <p>${escaped(data.message).replace(/\n/g, "<br>")}</p>
    <hr>
    <p style="color:#666;font-size:13px;">Sent from harbourviewdental.com contact form</p>
  `;
}

export function bookingEmailText(data: BookingPayload) {
  return [
    "New appointment request",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    "Message:",
    data.message,
    "",
    "- Sent from harbourviewdental.com contact form"
  ].join("\n");
}
