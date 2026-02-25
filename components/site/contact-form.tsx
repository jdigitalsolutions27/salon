"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone number is required"),
  message: z.string().min(10, "Please share a bit more detail"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    toast.success("Message sent. We will respond shortly.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-[#e7ddcf] bg-white p-6 shadow-[0_16px_30px_rgba(50,37,25,0.08)]" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#352c26]">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          {...register("name")}
          className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm focus:border-[#a6835e] focus:outline-none"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p className="mt-1 text-xs text-[#c84d45]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#352c26]">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm focus:border-[#a6835e] focus:outline-none"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p className="mt-1 text-xs text-[#c84d45]">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-[#352c26]">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          {...register("phone")}
          className="h-12 w-full rounded-xl border border-[#d9cabc] px-4 text-sm focus:border-[#a6835e] focus:outline-none"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <p className="mt-1 text-xs text-[#c84d45]">{errors.phone.message}</p> : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#352c26]">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          className="w-full rounded-xl border border-[#d9cabc] px-4 py-3 text-sm focus:border-[#a6835e] focus:outline-none"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="mt-1 text-xs text-[#c84d45]">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#1f2529] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#f6f2ed] transition hover:bg-[#2e3740] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
