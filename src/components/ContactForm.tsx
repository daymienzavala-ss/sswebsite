"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { IconArrow } from "./icons";

const services = [
  "Website Design & Development",
  "Maintenance & Security",
  "Digital Advertising",
  "SEO",
  "Conversion Optimization",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-accent/60 focus:bg-surface";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const subject = `New project inquiry — ${name || "Website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      "",
      "Details:",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
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
          <select id="service" name="service" className={fieldClass} defaultValue="">
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
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
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
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="What are you trying to achieve? What's getting in the way?"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-bright sm:w-auto"
      >
        Send inquiry
        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {sent && (
        <p className="text-sm text-accent-bright">
          Your email app should have opened with the message ready to send. If it
          didn&apos;t, email us directly at {site.email}.
        </p>
      )}
    </form>
  );
}
