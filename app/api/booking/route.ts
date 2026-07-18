import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  BOOKING_TO,
  bookingEmailHtml,
  bookingEmailText,
  validateBooking
} from "../../lib/booking";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = validateBooking(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  // Honeypot caught, pretend success
  if (parsed.isHoneypot) {
    return NextResponse.json({ ok: true });
  }

  const { data } = parsed;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, booking email not sent.");
    return NextResponse.json(
      {
        error:
          "Online booking is temporarily unavailable. Please call (250) 724-1314 or email info@harbourviewdental.com."
      },
      { status: 503 }
    );
  }

  const from =
    process.env.BOOKING_FROM ?? "Harbour View Dental <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: BOOKING_TO,
    replyTo: data.email,
    subject: `Appointment request - ${data.name}`,
    html: bookingEmailHtml(data),
    text: bookingEmailText(data)
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please call (250) 724-1314." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
