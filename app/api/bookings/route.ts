import { NextResponse } from "next/server";
import { z } from "zod";
import { createBooking, getBookings } from "@/lib/booking-store";

const bookingSchema = z.object({
  serviceId: z.string().min(1, "Service id is required"),
  serviceName: z.string().min(1, "Service name is required"),
  categoryId: z.string().min(1, "Category is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email().optional().or(z.literal("")),
  notes: z.string().max(500).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = bookingSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const booking = createBooking({
      ...parsed.data,
      email: parsed.data.email || undefined,
      notes: parsed.data.notes || undefined,
    });

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to save booking right now.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ success: true, bookings: getBookings() });
}
