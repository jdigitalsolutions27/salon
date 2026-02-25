import type { Metadata } from "next";
import Link from "next/link";
import { GalleryMasonry } from "@/components/site/gallery-masonry";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "Browse LuxeGlow Salon before and after beauty transformations across hair, nails, facial care, and makeup.",
};

export default function GalleryPage() {
  return (
    <div className="space-y-10 pb-12">
      <Reveal>
        <section className="rounded-3xl border border-[#e5d9cc] bg-white p-7 shadow-[0_16px_30px_rgba(45,33,21,0.08)] sm:p-10">
          <SectionHeading
            eyebrow="Gallery"
            title="Before and after transformations"
            description="See real outcomes from our hair, facial, nail, and makeup services. Tap any image to expand."
          />
        </section>
      </Reveal>

      <Reveal>
        <GalleryMasonry />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-[#e4d7c8] bg-gradient-to-r from-[#f9f2e8] to-[#fdfbf8] p-8 text-center">
          <h2 className="font-serif text-4xl text-[#1f1a17]">Ready to glow up?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#605850] sm:text-base">
            Secure your preferred date now and let our team customize the best service plan for your goals.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-flex rounded-full bg-[#1f2529] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#f6f2ed]"
          >
            Book Appointment
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
