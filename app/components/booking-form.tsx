"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { SITE } from "../lib/site";
import { BtnSubmit } from "./ui";

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }
    setStatus("loading");
    const data = new FormData(form);
    const reason = data.get("reason");
    const time = data.get("time");
    const message = [
      reason ? `Reason: ${reason}` : null,
      time ? `Preferred time: ${time}` : null,
      data.get("message")
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message,
          website: data.get("website")
        })
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        setError(result.error ?? `Something went wrong. Please call ${SITE.phone}.`);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError(`Something went wrong. Please call ${SITE.phone}.`);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-card form-success" role="status" aria-live="polite">
        <span className="form-success-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="display-s">Request received</h3>
        <p className="form-intro">
          We&apos;ll call or email you within one business day to confirm a time. For urgent
          concerns, call <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
        <button className="btn-secondary" type="button" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" aria-label="Appointment request form" onSubmit={onSubmit} noValidate>
      <h3 className="display-s">Request an appointment</h3>
      <p className="form-intro">
        Leave your details and the team will get back to you to confirm a time. For urgent
        concerns, calling is always fastest.
      </p>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bf-name">
            Full name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="bf-name"
            className="field"
            type="text"
            name="name"
            autoComplete="name"
            required
            aria-required="true"
            disabled={status === "loading"}
          />
        </div>
        <div className="form-field">
          <label htmlFor="bf-phone">
            Phone <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="bf-phone"
            className="field"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-required="true"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="bf-email">
            Email <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="bf-email"
            className="field"
            type="email"
            name="email"
            autoComplete="email"
            required
            aria-required="true"
            disabled={status === "loading"}
          />
        </div>
        <div className="form-field">
          <label htmlFor="bf-time">Preferred time</label>
          <select id="bf-time" className="field" name="time" disabled={status === "loading"} defaultValue="">
            <option value="">No preference</option>
            <option>Morning</option>
            <option>Midday</option>
            <option>Afternoon</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="bf-reason">Reason for visit</label>
        <select id="bf-reason" className="field" name="reason" disabled={status === "loading"} defaultValue="">
          <option value="">Select an option</option>
          <option>New patient exam &amp; cleaning</option>
          <option>Checkup / hygiene</option>
          <option>Tooth pain or emergency</option>
          <option>Children&apos;s visit</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="bf-message">
          How can we help? <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="bf-message"
          className="field"
          name="message"
          rows={4}
          required
          aria-required="true"
          disabled={status === "loading"}
        />
      </div>

      {/* Honeypot hidden from users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
      />

      {status === "error" && error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <p className="form-microcopy">
        We reply within one business day. By sending, you agree to be contacted about your
        request. Please don&apos;t include detailed medical history here — see our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>

      <BtnSubmit disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Request appointment"}
      </BtnSubmit>
    </form>
  );
}
