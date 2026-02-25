import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPhoneForWhatsapp(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export function buildBookingReference() {
  const token = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `LG-${new Date().getFullYear()}-${token}`;
}
