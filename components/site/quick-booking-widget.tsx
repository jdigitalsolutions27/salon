"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "@/data/services";

const quickBookingSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Pick your preferred date"),
  time: z.string().min(1, "Pick a time slot"),
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(7, "Enter a valid phone number"),
});

type QuickBookingValues = z.infer<typeof quickBookingSchema>;

const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:30 PM", "06:00 PM"];

export function QuickBookingWidget() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuickBookingValues>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      serviceId: "",
      date: "",
      time: "",
      name: "",
      phone: "",
    },
  });

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const onSubmit = (values: QuickBookingValues) => {
    const selected = services.find((service) => service.id === values.serviceId);

    const params = new URLSearchParams({
      service: values.serviceId,
      category: selected?.categoryId ?? "",
      date: values.date,
      time: values.time,
      name: values.name,
      phone: values.phone,
    });

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-3 rounded-3xl border border-[#e7ddcf] bg-white p-5 shadow-[0_18px_30px_rgba(53,37,25,0.09)] md:grid-cols-2 lg:grid-cols-5"
      aria-label="Quick booking widget"
    >
      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6958]">Service</label>
        <select
          {...register("serviceId")}
          className="h-11 w-full rounded-xl border border-[#d9cabc] px-3 text-sm text-[#2f2722] focus:border-[#aa8863] focus:outline-none"
          aria-invalid={Boolean(errors.serviceId)}
        >
          <option value="">Select service</option>
          {services.map((service) => (
            <option value={service.id} key={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.serviceId ? <p className="text-xs text-[#c84d45]">{errors.serviceId.message}</p> : null}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6958]">Date</label>
        <input
          type="date"
          min={today}
          {...register("date")}
          className="h-11 w-full rounded-xl border border-[#d9cabc] px-3 text-sm text-[#2f2722] focus:border-[#aa8863] focus:outline-none"
          aria-invalid={Boolean(errors.date)}
        />
        {errors.date ? <p className="text-xs text-[#c84d45]">{errors.date.message}</p> : null}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6958]">Time</label>
        <select
          {...register("time")}
          className="h-11 w-full rounded-xl border border-[#d9cabc] px-3 text-sm text-[#2f2722] focus:border-[#aa8863] focus:outline-none"
          aria-invalid={Boolean(errors.time)}
        >
          <option value="">Select slot</option>
          {timeSlots.map((slot) => (
            <option value={slot} key={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time ? <p className="text-xs text-[#c84d45]">{errors.time.message}</p> : null}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6958]">Name</label>
        <input
          type="text"
          placeholder="Your name"
          {...register("name")}
          className="h-11 w-full rounded-xl border border-[#d9cabc] px-3 text-sm text-[#2f2722] focus:border-[#aa8863] focus:outline-none"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p className="text-xs text-[#c84d45]">{errors.name.message}</p> : null}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6958]">Phone</label>
        <input
          type="tel"
          placeholder="(555) 123-4567"
          {...register("phone")}
          className="h-11 w-full rounded-xl border border-[#d9cabc] px-3 text-sm text-[#2f2722] focus:border-[#aa8863] focus:outline-none"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <p className="text-xs text-[#c84d45]">{errors.phone.message}</p> : null}
      </div>

      <button
        type="submit"
        className="md:col-span-2 lg:col-span-5 rounded-full bg-[#1f2529] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f6f2ed] transition hover:bg-[#2f3840]"
      >
        Continue to full booking
      </button>
    </form>
  );
}
