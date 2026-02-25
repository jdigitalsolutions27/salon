"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronLeft, ChevronRight, Loader2, MessageCircleMore } from "lucide-react";
import { serviceCategories, services, servicesByCategory, type ServiceCategoryId } from "@/data/services";
import { formatPhoneForWhatsapp } from "@/lib/utils";
import { toast } from "sonner";

const bookingSchema = z.object({
  categoryId: z.string().min(1, "Please choose a service category."),
  serviceId: z.string().min(1, "Please choose a service."),
  date: z.string().min(1, "Please choose a preferred date."),
  time: z.string().min(1, "Please choose a preferred time."),
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.union([z.string().email("Please enter a valid email."), z.literal("")]).optional(),
  notes: z.string().max(500, "Notes can be up to 500 characters.").optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  prefill?: Partial<BookingValues>;
}

interface SavedBooking {
  reference: string;
  serviceName: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  notes?: string;
}

const timeSlots = [
  "09:00 AM",
  "09:45 AM",
  "10:30 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
  "07:00 PM",
];

const steps = ["Service", "Schedule", "Details", "Notes"];

const fieldsByStep: Record<number, Array<keyof BookingValues>> = {
  1: ["categoryId", "serviceId"],
  2: ["date", "time"],
  3: ["name", "phone", "email"],
  4: ["notes"],
};

export function BookingForm({ prefill }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedBooking, setSavedBooking] = useState<SavedBooking | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
    reset,
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      categoryId: prefill?.categoryId ?? "",
      serviceId: prefill?.serviceId ?? "",
      date: prefill?.date ?? "",
      time: prefill?.time ?? "",
      name: prefill?.name ?? "",
      phone: prefill?.phone ?? "",
      email: prefill?.email ?? "",
      notes: prefill?.notes ?? "",
    },
  });

  const selectedCategory = watch("categoryId") as ServiceCategoryId | "";
  const selectedServiceId = watch("serviceId");
  const selectedService = services.find((service) => service.id === selectedServiceId);
  const selectedTime = watch("time");
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    if (!selectedCategory) {
      setValue("serviceId", "");
      return;
    }

    const validService = servicesByCategory[selectedCategory]?.some((item) => item.id === selectedServiceId);
    if (!validService) {
      setValue("serviceId", "");
    }
  }, [selectedCategory, selectedServiceId, setValue]);

  const nextStep = async () => {
    const valid = await trigger(fieldsByStep[step], { shouldFocus: true });
    if (!valid) return;
    setStep((current) => Math.min(current + 1, steps.length));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const onSubmit = async (values: BookingValues) => {
    setIsSubmitting(true);
    try {
      const service = services.find((item) => item.id === values.serviceId);
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          serviceName: service?.name ?? "Selected Service",
        }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload?.message || "We could not complete your booking.");
      }

      setSavedBooking({
        reference: payload.booking.reference,
        serviceName: payload.booking.serviceName,
        date: payload.booking.date,
        time: payload.booking.time,
        name: payload.booking.name,
        phone: payload.booking.phone,
        notes: payload.booking.notes,
      });
      toast.success("Appointment request confirmed.");
      reset();
      setStep(1);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = savedBooking
    ? encodeURIComponent(
        [
          `Hello LuxeGlow Salon, I have a new booking request (${savedBooking.reference}).`,
          `Service: ${savedBooking.serviceName}`,
          `Date: ${savedBooking.date}`,
          `Time: ${savedBooking.time}`,
          `Name: ${savedBooking.name}`,
          `Phone: ${savedBooking.phone}`,
          `Notes: ${savedBooking.notes || "None"}`,
        ].join("\n"),
      )
    : "";

  return (
    <>
      <div className="rounded-3xl border border-[#e7ddcf] bg-white p-6 shadow-[0_20px_35px_rgba(52,40,28,0.09)] sm:p-8">
        <div className="mb-8 grid grid-cols-4 gap-2" aria-label="Booking steps">
          {steps.map((label, index) => {
            const current = index + 1;
            const active = step >= current;
            return (
              <div key={label} className="space-y-2">
                <div className={`h-1.5 rounded-full ${active ? "bg-[#8b6e52]" : "bg-[#e8ddd0]"}`} />
                <p className={`text-xs uppercase tracking-[0.12em] ${active ? "text-[#6f543b]" : "text-[#a1968b]"}`}>
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
          {step === 1 ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Service Category</label>
                <select
                  {...register("categoryId")}
                  className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.categoryId)}
                >
                  <option value="">Select a category</option>
                  {serviceCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId ? <p className="text-sm text-[#c84d45]">{errors.categoryId.message}</p> : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Service</label>
                <select
                  {...register("serviceId")}
                  className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.serviceId)}
                >
                  <option value="">Select a service</option>
                  {(selectedCategory ? servicesByCategory[selectedCategory] : []).map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.serviceId ? <p className="text-sm text-[#c84d45]">{errors.serviceId.message}</p> : null}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Preferred Date</label>
                <input
                  type="date"
                  min={today}
                  {...register("date")}
                  className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.date)}
                />
                {errors.date ? <p className="text-sm text-[#c84d45]">{errors.date.message}</p> : null}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-[#382f29]">Preferred Time</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setValue("time", slot, { shouldValidate: true })}
                      className={`rounded-xl border px-3 py-2 text-sm transition ${
                        selectedTime === slot
                          ? "border-[#1f2529] bg-[#1f2529] text-[#f7f2eb]"
                          : "border-[#d9cabc] text-[#4c423a] hover:border-[#af8d69]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <input type="hidden" {...register("time")} />
                {errors.time ? <p className="text-sm text-[#c84d45]">{errors.time.message}</p> : null}
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="text-sm text-[#c84d45]">{errors.name.message}</p> : null}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("phone")}
                  className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone ? <p className="text-sm text-[#c84d45]">{errors.phone.message}</p> : null}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Email (optional)</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="text-sm text-[#c84d45]">{errors.email.message}</p> : null}
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#382f29]">Notes for your stylist (optional)</label>
                <textarea
                  rows={5}
                  placeholder="Hair length, sensitivity notes, allergies, or special requests"
                  {...register("notes")}
                  className="w-full rounded-xl border border-[#d9cabc] px-4 py-3 text-sm text-[#2e261f] focus:border-[#a6835e] focus:outline-none"
                  aria-invalid={Boolean(errors.notes)}
                />
                {errors.notes ? <p className="text-sm text-[#c84d45]">{errors.notes.message}</p> : null}
              </div>

              <div className="rounded-2xl border border-[#eadfce] bg-[#fcf8f4] p-4 text-sm text-[#5e564f]">
                <p className="font-semibold text-[#3d342f]">Booking Summary</p>
                <p className="mt-2">Service: {selectedService?.name ?? "Not selected"}</p>
                <p>Date: {watch("date") || "Not selected"}</p>
                <p>Time: {watch("time") || "Not selected"}</p>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-[#eee4d8] pt-5 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className="inline-flex items-center justify-center gap-1 rounded-full border border-[#d4c4b4] px-5 py-2.5 text-sm font-semibold text-[#654c36] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            {step < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center justify-center gap-1 rounded-full bg-[#1f2529] px-6 py-2.5 text-sm font-semibold text-[#f7f2eb] transition hover:bg-[#2e3740]"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f2529] px-6 py-2.5 text-sm font-semibold text-[#f7f2eb] transition hover:bg-[#2e3740] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                Confirm Appointment
              </button>
            )}
          </div>
        </form>
      </div>

      {savedBooking ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-3xl bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6e52]">Booking Confirmed</p>
            <h3 className="mt-2 font-serif text-3xl text-[#1f1a17]">You are all set.</h3>
            <p className="mt-3 text-sm text-[#5f5852]">
              Your reference number is <span className="font-semibold text-[#2d241d]">{savedBooking.reference}</span>.
            </p>
            <div className="mt-5 rounded-2xl border border-[#eadfce] bg-[#fcf8f4] p-4 text-sm text-[#4a423b]">
              <p>{savedBooking.serviceName}</p>
              <p>
                {savedBooking.date} at {savedBooking.time}
              </p>
              <p>{savedBooking.name}</p>
              <p>{savedBooking.phone}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`https://wa.me/${formatPhoneForWhatsapp("+12125550189")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircleMore className="h-4 w-4" />
                Send to WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setSavedBooking(null)}
                className="rounded-full border border-[#d3c2b0] px-4 py-2.5 text-sm font-semibold text-[#6b523b]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
