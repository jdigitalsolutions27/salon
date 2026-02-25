"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { href: "/services", label: "Services & Pricing" },
  { href: "/booking", label: "Book Appointment" },
  { href: "/gallery", label: "Before / After Gallery" },
  { href: "/about", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }

    toast.success("Thanks for subscribing. We will send offers and booking reminders.");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#e5dbcf] bg-[#1f2529] text-[#f6f2ed]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,183,143,0.22),_transparent_45%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#e6c79d]" />
            <span className="font-serif text-2xl">LuxeGlow Salon</span>
          </div>
          <p className="max-w-sm text-sm text-[#d6c6b6]">
            Premium salon experiences crafted for healthy hair, glowing skin, and confidence that lasts beyond your appointment.
          </p>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href="#" className="rounded-full border border-[#4a5359] p-2 text-[#e8d6c2] transition hover:bg-[#2f3840]">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" href="#" className="rounded-full border border-[#4a5359] p-2 text-[#e8d6c2] transition hover:bg-[#2f3840]">
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${siteConfig.email}`}
              className="rounded-full border border-[#4a5359] p-2 text-[#e8d6c2] transition hover:bg-[#2f3840]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#d6c6b6]">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#f7e3c4]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-xl">Newsletter</h3>
          <p className="text-sm text-[#d6c6b6]">Get seasonal offers, package drops, and priority booking updates.</p>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-11 w-full rounded-full border border-[#4a5359] bg-[#1f2529] px-4 text-sm text-[#f7f3ee] placeholder:text-[#ac9e90] focus:border-[#d8b893] focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#d8b893] px-5 text-sm font-semibold text-[#1f1a17] transition hover:bg-[#e4c8a7]"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="space-y-1 text-sm text-[#d6c6b6]">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#313a41] py-4 text-center text-xs text-[#b7a695]">
        Copyright {new Date().getFullYear()} LuxeGlow Salon. All rights reserved.
      </div>
    </footer>
  );
}
