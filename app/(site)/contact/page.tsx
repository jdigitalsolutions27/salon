import type { Metadata } from "next";
import { Facebook, Instagram, Mail, MapPin, MessageCircleMore, PhoneCall, Send, Clock3 } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact LuxeGlow Salon, find directions, and send a message for booking support.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-12">
      <Reveal>
        <section className="rounded-3xl border border-[#e5d9cc] bg-white p-7 shadow-[0_16px_30px_rgba(45,33,21,0.08)] sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="We are here to help with your booking"
            description="Reach us by phone, WhatsApp, Messenger, or send a message below."
          />
        </section>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="space-y-4 rounded-3xl border border-[#e5d9cc] bg-white p-6 shadow-[0_12px_24px_rgba(45,34,22,0.07)]">
            <div className="rounded-2xl border border-[#ebddcd] bg-[#fcf8f3] p-4 text-sm text-[#5f5852]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <MapPin className="h-4 w-4 text-[#8b6e52]" />
                Address
              </p>
              <p className="mt-2">{siteConfig.address}</p>
            </div>
            <div className="rounded-2xl border border-[#ebddcd] bg-[#fcf8f3] p-4 text-sm text-[#5f5852]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <PhoneCall className="h-4 w-4 text-[#8b6e52]" />
                Phone
              </p>
              <a href={`tel:${siteConfig.phone}`} className="mt-2 block hover:text-[#7b5d41]">
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-[#ebddcd] bg-[#fcf8f3] p-4 text-sm text-[#5f5852]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <Mail className="h-4 w-4 text-[#8b6e52]" />
                Email
              </p>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 block hover:text-[#7b5d41]">
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-2xl border border-[#ebddcd] bg-[#fcf8f3] p-4 text-sm text-[#5f5852]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <Clock3 className="h-4 w-4 text-[#8b6e52]" />
                Hours
              </p>
              <p className="mt-2">{siteConfig.hours}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.messenger}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                <Send className="h-4 w-4" />
                Messenger
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c8b7] text-[#6f543b]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c8b7] text-[#6f543b]">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>

      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-[#e2d4c3] bg-white shadow-[0_14px_28px_rgba(44,30,20,0.08)]">
          <iframe
            title="LuxeGlow map"
            src={siteConfig.mapEmbed}
            className="h-[390px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
