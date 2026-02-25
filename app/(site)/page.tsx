import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  CalendarClock,
  Gem,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stars,
} from "lucide-react";
import { QuickBookingWidget } from "@/components/site/quick-booking-widget";
import { TestimonialSlider } from "@/components/site/testimonial-slider";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServiceIcon } from "@/components/site/service-icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems } from "@/data/gallery";
import { promoPackages } from "@/data/promos";
import { serviceCategories, topServices } from "@/data/services";
import { siteConfig } from "@/data/site";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Premium Beauty Experiences",
  description:
    "Discover LuxeGlow Salon: premium hair, skin, nails, and beauty services with licensed experts. Book your appointment online.",
};

const trustItems = [
  {
    title: "Certified Stylists",
    description: "Licensed professionals trained in modern techniques and personalized consultations.",
    icon: Award,
  },
  {
    title: "Clean & Safe Tools",
    description: "Sterilized tools, sanitized stations, and single-use disposables for every guest.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Products",
    description: "We use high-quality professional formulas inspired by salon-grade standards.",
    icon: Gem,
  },
  {
    title: "Comfortable Space",
    description: "A calm, elegant environment designed to make every visit relaxing and efficient.",
    icon: HeartHandshake,
  },
];

const teaserGallery = galleryItems.filter((item) => item.stage === "after").slice(0, 4);

export default function HomePage() {
  return (
    <div className="space-y-20 pb-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-[#e9ddcf] bg-[#1f2529] text-white">
        <Image
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1800&q=80"
          alt="Stylist working on client in a premium salon"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11161ad4] via-[#1f2529bf] to-transparent" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-18 sm:px-10 sm:py-24 lg:py-28">
          <Reveal className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f5dfbf]">
              <Sparkles className="h-3.5 w-3.5" />
              Premium Salon Experience
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">Glow Up Starts Here.</h1>
            <p className="max-w-xl text-base text-[#efe5db] sm:text-lg">
              Trusted by modern clients for polished results, hygienic care, and licensed specialists using premium products.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="rounded-full bg-[#d8b893] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#1f1a17] transition hover:bg-[#e7cbac]"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/15"
              >
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <SectionHeading
          eyebrow="Quick Booking"
          title="Reserve your preferred time in under a minute"
          description="Share your preferred service and schedule now. You can finalize details on the full booking page."
        />
        <div className="mt-6">
          <QuickBookingWidget />
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          eyebrow="Service Highlights"
          title="Luxury services with transparent starting prices"
          description="Designed for beauty and long-term hair and skin health."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <article key={category.id} className="group rounded-3xl border border-[#e6dbce] bg-white p-6 shadow-[0_14px_30px_rgba(44,31,19,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(44,31,19,0.12)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3eadf] text-[#7c5f45]">
                <ServiceIcon icon={category.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-[#1f1a17]">{category.name}</h3>
              <p className="mt-2 text-sm text-[#5e574f]">{category.description}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b6e52]">
                Starts at {formatCurrency(topServices[index]?.price ?? 52)}
              </p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          eyebrow="Before & After"
          title="Real transformations from our recent clients"
          description="Preview results, then explore the complete gallery."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teaserGallery.map((item) => (
            <Link key={item.id} href="/gallery" className="group relative h-64 overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.13em] text-[#f4dbc0]">After</p>
                <p className="font-serif text-xl">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/gallery"
          className="mt-6 inline-flex rounded-full border border-[#d5c4b2] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#6f543b] transition hover:bg-[#f3ebe2]"
        >
          View Full Gallery
        </Link>
      </Reveal>

      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The details that build trust from your first visit"
          description="Every appointment follows strict quality and hygiene practices."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#e6dbce] bg-white p-5">
              <item.icon className="h-5 w-5 text-[#8b6e52]" />
              <h3 className="mt-4 text-lg font-semibold text-[#2a221d]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#625952]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-[#d7c4b0] bg-[#fff8ee] p-4 text-sm text-[#5a4b3d]">
          <p className="font-semibold text-[#3f3328]">Hygiene & Safety Note</p>
          <p className="mt-2">
            Tools are sterilized after each use, treatment beds are disinfected between guests, and disposable items are never reused.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          eyebrow="Promos & Packages"
          title="Smart bundles for better results and value"
          description="Limited monthly slots. Secure your package early."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {promoPackages.map((promo) => (
            <article key={promo.id} className="rounded-3xl border border-[#e6dbce] bg-white p-6 shadow-[0_14px_24px_rgba(45,33,21,0.06)]">
              <p className="inline-flex rounded-full bg-[#f5ecdf] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8b6e52]">
                {promo.badge}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1f1a17]">{promo.title}</h3>
              <p className="mt-3 text-sm text-[#5f5852]">{promo.description}</p>
              <p className="mt-5 text-xl font-semibold text-[#2f2621]">{promo.price}</p>
              <Link
                href="/booking"
                className="mt-5 inline-flex rounded-full bg-[#1f2529] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#f6f2ed]"
              >
                Book package
              </Link>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients who trust LuxeGlow regularly"
          description="Consistent quality and comfort are why most guests return monthly."
        />
        <div className="mt-8">
          <TestimonialSlider />
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          eyebrow="Frequently Asked"
          title="Everything you need before booking"
          description="Simple answers on appointments, deposits, and availability."
        />
        <div className="mt-6">
          <FaqAccordion />
        </div>
      </Reveal>

      <Reveal>
        <div className="grid gap-7 rounded-3xl border border-[#e5d8ca] bg-white p-6 shadow-[0_16px_28px_rgba(45,31,20,0.07)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Find Us"
              title="Easy access in central Manhattan"
              description="Walk in or reserve ahead. Use the map to get directions instantly."
            />
            <div className="mt-5 space-y-2 text-sm text-[#615850]">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.hours}</p>
            </div>
            <a
              href={siteConfig.directionsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1f2529] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#f6f2ed]"
            >
              <CalendarClock className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e8dccd]">
            <iframe
              title="LuxeGlow location"
              src={siteConfig.mapEmbed}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="rounded-3xl border border-[#e3d6c7] bg-gradient-to-r from-[#f5ede3] to-[#fbf8f4] p-7 sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6e52]">Premium Products</p>
              <h2 className="mt-2 font-serif text-4xl text-[#1f1a17]">Healthy beauty backed by better formulas</h2>
              <p className="mt-3 max-w-2xl text-sm text-[#5f5852] sm:text-base">
                Our routines feature salon-grade product lines often chosen by professionals for repair, hydration, and long-lasting finish.
                Brand names shown are for style reference only and do not indicate official partnership.
              </p>
            </div>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f2529] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#f6f2ed]"
            >
              Book your glow session
              <Stars className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-[#6e5a48]">
            <span className="rounded-full border border-[#d8c6b1] bg-white px-3 py-1">Kerastase inspired care</span>
            <span className="rounded-full border border-[#d8c6b1] bg-white px-3 py-1">Olaplex-style bond support</span>
            <span className="rounded-full border border-[#d8c6b1] bg-white px-3 py-1">Dermal hydration systems</span>
            <span className="rounded-full border border-[#d8c6b1] bg-white px-3 py-1">Professional color-safe lines</span>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#4f4338]">
            <BadgeCheck className="h-4 w-4 text-[#8b6e52]" />
            Consultation-based product recommendations are personalized for your hair and skin profile.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
