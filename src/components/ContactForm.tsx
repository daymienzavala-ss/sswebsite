"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { IconArrow, IconCheck } from "./icons";

const services = [
  "Web Design & Development",
  "Digital Advertising",
  "Maintenance & Security",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-accent/60 focus:bg-surface disabled:opacity-60";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      service: data.get("service"),
      budget: data.get("budget"),
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError("Network error. Please try again, or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <IconCheck className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl">Thanks — we got it.</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Your inquiry is on its way to our inbox. We&apos;ll get back to you
            within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 text-sm font-medium text-accent"
        >
          Send another →
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required disabled={sending} className={fieldClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={sending}
            className={fieldClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
            What do you need?
          </label>
          <select id="service" name="service" disabled={sending} className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
            Budget (optional)
          </label>
          <select id="budget" name="budget" disabled={sending} className={fieldClass} defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under $2k</option>
            <option>$2k – $5k</option>
            <option>$5k – $10k</option>
            <option>$10k+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={sending}
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="What are you trying to achieve? What's getting in the way?"
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden" tabIndex={-1}>
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Sending…" : "Send inquiry"}
        {!sending && (
          <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-accent">
          {error}{" "}
          <a href={`mailto:${site.email}`} className="font-medium underline">
            {site.email}
          </a>
        </p>
      )}
    </form>
  );
}
