import type { Metadata } from "next";
import Link from "next/link";
import { ServicesCatalog } from "@/components/site/services-catalog";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore LuxeGlow Salon services with transparent pricing, durations, and easy one-click booking.",
};

interface ServicesPageProps {
  searchParams?: {
    category?: string;
  };
}

export default function ServicesPage({ searchParams }: ServicesPageProps) {
  return (
    <div className="space-y-10 pb-12">
      <Reveal>
        <section className="rounded-3xl border border-[#e5d9cc] bg-white p-7 shadow-[0_16px_32px_rgba(45,34,22,0.06)] sm:p-10">
          <SectionHeading
            eyebrow="Services & Pricing"
            title="Personalized beauty services with clear pricing"
            description="Select a category to view service duration, price, and what is included. Book any service instantly."
          />
        </section>
      </Reveal>

      <Reveal>
        <ServicesCatalog initialCategory={searchParams?.category} />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-[#e3d4c3] bg-gradient-to-r from-[#f8f2ea] to-[#fdfbf8] p-8 text-center">
          <h2 className="font-serif text-4xl text-[#1f1a17]">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5f5852] sm:text-base">
            Tell us your goals on the booking form and our team will guide you to the best service combination.
          </p>
          <Link
            href="/booking"
            className="mt-5 inline-flex rounded-full bg-[#1f2529] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#f6f2ed]"
          >
            Book Appointment
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
