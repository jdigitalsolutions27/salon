import type { Metadata } from "next";
import { ShieldCheck, WalletCards, Clock3 } from "lucide-react";
import { BookingForm } from "@/components/site/booking-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your LuxeGlow Salon appointment online with a smooth multi-step form and instant booking confirmation.",
};

interface BookingPageProps {
  searchParams?: {
    category?: string;
    service?: string;
    date?: string;
    time?: string;
    name?: string;
    phone?: string;
    email?: string;
    notes?: string;
  };
}

export default function BookingPage({ searchParams }: BookingPageProps) {
  const prefill = {
    categoryId: searchParams?.category ?? "",
    serviceId: searchParams?.service ?? "",
    date: searchParams?.date ?? "",
    time: searchParams?.time ?? "",
    name: searchParams?.name ?? "",
    phone: searchParams?.phone ?? "",
    email: searchParams?.email ?? "",
    notes: searchParams?.notes ?? "",
  };

  return (
    <div className="space-y-10 pb-12">
      <Reveal>
        <section className="rounded-3xl border border-[#e5d9cc] bg-white p-7 shadow-[0_14px_30px_rgba(45,33,21,0.08)] sm:p-10">
          <SectionHeading
            eyebrow="Book Appointment"
            title="Reserve your LuxeGlow experience"
            description="Select your service, preferred schedule, and details. You will get a booking reference after submission."
          />
        </section>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <Reveal>
          <BookingForm prefill={prefill} />
        </Reveal>

        <Reveal>
          <aside className="space-y-4 rounded-3xl border border-[#e5d9cc] bg-white p-6 shadow-[0_12px_24px_rgba(45,34,22,0.06)]">
            <h2 className="font-serif text-3xl text-[#1f1a17]">Booking Policies</h2>

            <div className="rounded-2xl border border-[#ecdcc9] bg-[#fcf8f3] p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#3f342a]">
                <WalletCards className="h-4 w-4 text-[#8b6e52]" />
                Deposit Policy
              </p>
              <p className="mt-2 text-sm text-[#5e554e]">
                Select services (color, treatments, bridal) may require a small deposit to hold your slot.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ecdcc9] bg-[#fcf8f3] p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#3f342a]">
                <Clock3 className="h-4 w-4 text-[#8b6e52]" />
                Cancellation & Late Arrivals
              </p>
              <p className="mt-2 text-sm text-[#5e554e]">
                Please cancel at least 24 hours ahead. Arrivals over 15 minutes late may need rescheduling.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ecdcc9] bg-[#fcf8f3] p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#3f342a]">
                <ShieldCheck className="h-4 w-4 text-[#8b6e52]" />
                Hygiene & Safety
              </p>
              <p className="mt-2 text-sm text-[#5e554e]">
                Sanitized workstations, sterilized tools, and single-use consumables are standard for every booking.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
