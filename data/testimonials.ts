export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ariana M.",
    role: "Marketing Director",
    service: "Luxe Balayage",
    quote:
      "The color blend is flawless and still looks expensive weeks later. The team listened, advised, and delivered exactly what I wanted.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Jasmine L.",
    role: "Bride-to-be",
    service: "Bridal Preview Session",
    quote:
      "I left feeling calm and confident for my wedding day. Their hygiene standards and attention to detail were outstanding.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Natalie R.",
    role: "Entrepreneur",
    service: "HydraGlow Facial",
    quote:
      "My skin looked bright right after the treatment with no irritation. LuxeGlow feels premium from booking to checkout.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Sofia K.",
    role: "Content Creator",
    service: "Lash Lift + Tint",
    quote:
      "Appointments always start on time, and the results are consistently beautiful. This is my go-to salon for camera days.",
    rating: 5,
  },
];
