import { buildBookingReference } from "@/lib/utils";

export interface BookingInput {
  serviceId: string;
  serviceName: string;
  categoryId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

export interface BookingRecord extends BookingInput {
  id: string;
  reference: string;
  createdAt: string;
}

declare global {
  var luxeGlowBookings: BookingRecord[] | undefined;
}

const bookingStore = globalThis.luxeGlowBookings ?? [];

if (!globalThis.luxeGlowBookings) {
  globalThis.luxeGlowBookings = bookingStore;
}

export function createBooking(input: BookingInput) {
  const booking: BookingRecord = {
    ...input,
    id: crypto.randomUUID(),
    reference: buildBookingReference(),
    createdAt: new Date().toISOString(),
  };

  bookingStore.unshift(booking);
  return booking;
}

export function getBookings() {
  return bookingStore;
}
