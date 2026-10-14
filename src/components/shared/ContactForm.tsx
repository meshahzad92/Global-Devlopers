"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const field = "w-full rounded-sm border bg-card px-4 py-3 text-sm outline-none focus:border-gold";

/** No backend: submitting opens the visitor's email app with the enquiry pre-filled. */
export function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-sm border bg-card p-8 shadow-sm sm:grid-cols-2">
      <label className="text-xs font-semibold">
        Full name
        <input required autoComplete="name" className={`${field} mt-2`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </label>
      <label className="text-xs font-semibold">
        Email
        <input required type="email" autoComplete="email" className={`${field} mt-2`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </label>
      <label className="text-xs font-semibold sm:col-span-2">
        Phone
        <input type="tel" autoComplete="tel" className={`${field} mt-2`} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </label>
      <label className="text-xs font-semibold sm:col-span-2">
        Message
        <textarea required rows={5} className={`${field} mt-2`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </label>
      <Button type="submit" variant="gold" className="sm:col-span-2 sm:justify-self-start">
        Send Message
      </Button>
    </form>
  );
}
