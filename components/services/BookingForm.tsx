"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

interface BookingFormProps {
  serviceTitle: string;
  ctaMessage: string;
}

export function BookingForm({ serviceTitle, ctaMessage }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [issue, setIssue] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim())    e.name    = "Please enter your name";
    if (!phone.trim())   e.phone   = "Please enter your phone number";
    if (phone.trim() && !/^[6-9]\d{9}$/.test(phone.trim()))
                         e.phone   = "Enter a valid 10-digit Indian mobile number";
    if (!address.trim()) e.address = "Please enter your address";
    if (!issue.trim())   e.issue   = "Please describe the issue";
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const lines = [
      `Hi, I'd like to book a *${serviceTitle}* at home.`,
      ``,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Address:* ${address.trim()}`,
      deviceModel.trim() ? `*Device Model:* ${deviceModel.trim()}` : null,
      `*Issue:* ${issue.trim()}`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const waUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="white-card p-8 text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ok-green/15">
            <CheckCircle2 className="h-8 w-8 text-ok-green" />
          </div>
        </div>
        <div className="font-display font-bold text-ink text-[1.2rem]">WhatsApp Opened!</div>
        <p className="text-ink-mid text-[14px] leading-relaxed">
          Your booking details have been pre-filled. Just hit Send in WhatsApp and we&rsquo;ll
          confirm your slot shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[13px] text-gold hover:text-gold-dark font-medium underline"
        >
          Book another service
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="white-card p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-ink text-[1.1rem] sm:text-[1.15rem]">Book This Service</h3>
        <p className="text-ink-light text-[13px]">No advance. No sign-up. Just WhatsApp.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-[12px] font-medium text-ink-mid uppercase tracking-wide" htmlFor="bf-name">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="bf-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ravi Kumar"
            className={`w-full rounded-[10px] border px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-light/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
              errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-gold"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[12px] font-medium text-ink-mid uppercase tracking-wide" htmlFor="bf-phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="bf-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="9606246512"
            className={`w-full rounded-[10px] border px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-light/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
              errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-gold"
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-medium text-ink-mid uppercase tracking-wide" htmlFor="bf-address">
          Your Address <span className="text-red-500">*</span>
        </label>
        <input
          id="bf-address"
          type="text"
          autoComplete="street-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Flat / House No, Street, Area, Bengaluru"
          className={`w-full rounded-[10px] border px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-light/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
            errors.address ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-gold"
          }`}
        />
        {errors.address && <p className="text-[11px] text-red-500">{errors.address}</p>}
      </div>

      {/* Device Model (optional) */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-medium text-ink-mid uppercase tracking-wide" htmlFor="bf-device">
          Device Model <span className="text-ink-light font-normal">(optional)</span>
        </label>
        <input
          id="bf-device"
          type="text"
          value={deviceModel}
          onChange={(e) => setDeviceModel(e.target.value)}
          placeholder="e.g. Samsung Galaxy A54, iPhone 13, HP Pavilion"
          className="w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-light/60 outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
        />
      </div>

      {/* Issue */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-medium text-ink-mid uppercase tracking-wide" htmlFor="bf-issue">
          Describe the Issue <span className="text-red-500">*</span>
        </label>
        <textarea
          id="bf-issue"
          rows={3}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="e.g. Screen is cracked and touch is not working"
          className={`w-full rounded-[10px] border px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-light/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none ${
            errors.issue ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-gold"
          }`}
        />
        {errors.issue && <p className="text-[11px] text-red-500">{errors.issue}</p>}
      </div>

      <button
        type="submit"
        className="btn-wa w-full py-3.5 text-[15px]"
      >
        <MessageCircle className="h-5 w-5" />
        Book via WhatsApp
      </button>

      <p className="text-[11px] text-ink-light text-center">
        This opens WhatsApp with your details pre-filled — just hit Send.
      </p>
    </form>
  );
}
