export type ServiceCategoryId =
  | "haircut-styling"
  | "hair-color"
  | "treatments"
  | "nails"
  | "facial-spa"
  | "lashes-makeup";

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  description: string;
  icon: "scissors" | "palette" | "sparkles" | "hand" | "leaf" | "wand";
}

export interface ServiceItem {
  id: string;
  categoryId: ServiceCategoryId;
  name: string;
  price: number;
  duration: string;
  description: string;
  featured?: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "haircut-styling",
    name: "Haircut & Styling",
    description: "Precision cuts and signature styling tailored to your face shape.",
    icon: "scissors",
  },
  {
    id: "hair-color",
    name: "Hair Color",
    description: "Modern color techniques for rich tone, shine, and dimension.",
    icon: "palette",
  },
  {
    id: "treatments",
    name: "Treatments",
    description: "Repair-focused rituals that restore strength, smoothness, and gloss.",
    icon: "sparkles",
  },
  {
    id: "nails",
    name: "Nails",
    description: "Flawless manicures and long-wear finishes in a hygienic setting.",
    icon: "hand",
  },
  {
    id: "facial-spa",
    name: "Facial / Spa",
    description: "Skin-renewing facials designed for glow, hydration, and comfort.",
    icon: "leaf",
  },
  {
    id: "lashes-makeup",
    name: "Lashes / Makeup",
    description: "Camera-ready beauty for events, weddings, and everyday confidence.",
    icon: "wand",
  },
];

export const services: ServiceItem[] = [
  {
    id: "precision-cut",
    categoryId: "haircut-styling",
    name: "Precision Cut + Blowout",
    price: 85,
    duration: "60 min",
    description: "Consultation-led cut with polished finish and styling tips.",
    featured: true,
  },
  {
    id: "signature-blowout",
    categoryId: "haircut-styling",
    name: "Signature Blowout",
    price: 55,
    duration: "45 min",
    description: "Smooth, bouncy, humidity-resistant styling with heat protectant.",
  },
  {
    id: "event-styling",
    categoryId: "haircut-styling",
    name: "Event Hair Styling",
    price: 95,
    duration: "70 min",
    description: "Elegant updos and soft glam waves for special occasions.",
  },
  {
    id: "root-touchup",
    categoryId: "hair-color",
    name: "Root Touch-Up",
    price: 90,
    duration: "90 min",
    description: "Seamless gray coverage and root blending for natural depth.",
  },
  {
    id: "balayage",
    categoryId: "hair-color",
    name: "Luxe Balayage",
    price: 240,
    duration: "180 min",
    description: "Hand-painted highlights with soft grow-out and glossy finish.",
    featured: true,
  },
  {
    id: "full-color",
    categoryId: "hair-color",
    name: "Full Color Refresh",
    price: 160,
    duration: "120 min",
    description: "Rich all-over tone with tailored gloss for shine and dimension.",
  },
  {
    id: "keratin-smoothing",
    categoryId: "treatments",
    name: "Keratin Smoothing",
    price: 260,
    duration: "150 min",
    description: "Frizz-control treatment for smoother hair and easier styling.",
    featured: true,
  },
  {
    id: "bond-repair",
    categoryId: "treatments",
    name: "Bond Repair Ritual",
    price: 120,
    duration: "60 min",
    description: "Targeted repair service to strengthen damaged, color-treated hair.",
  },
  {
    id: "scalp-reset",
    categoryId: "treatments",
    name: "Scalp Reset Therapy",
    price: 95,
    duration: "50 min",
    description: "Clarifying exfoliation and hydration for healthier scalp balance.",
  },
  {
    id: "classic-mani-pedi",
    categoryId: "nails",
    name: "Classic Mani + Pedi",
    price: 75,
    duration: "70 min",
    description: "Cuticle care, shaping, exfoliation, and polished finish.",
  },
  {
    id: "gel-manicure",
    categoryId: "nails",
    name: "Gel Manicure",
    price: 52,
    duration: "45 min",
    description: "Long-lasting, chip-resistant gel finish with careful prep.",
    featured: true,
  },
  {
    id: "nail-art",
    categoryId: "nails",
    name: "Soft Glam Nail Art",
    price: 68,
    duration: "60 min",
    description: "Custom minimalist design work for elevated everyday style.",
  },
  {
    id: "hydraglow-facial",
    categoryId: "facial-spa",
    name: "HydraGlow Facial",
    price: 130,
    duration: "75 min",
    description: "Deep cleanse, infusion, and hydration for immediate luminosity.",
    featured: true,
  },
  {
    id: "anti-aging-facial",
    categoryId: "facial-spa",
    name: "Firming Anti-Age Facial",
    price: 150,
    duration: "80 min",
    description: "Peptide-rich treatment focused on elasticity and smooth texture.",
  },
  {
    id: "relaxing-spa",
    categoryId: "facial-spa",
    name: "Express Relax Spa",
    price: 98,
    duration: "55 min",
    description: "Stress-relief ritual with massage and aromatherapy elements.",
  },
  {
    id: "lash-lift",
    categoryId: "lashes-makeup",
    name: "Lash Lift + Tint",
    price: 92,
    duration: "60 min",
    description: "Lifted, darker-looking lashes with low-maintenance elegance.",
    featured: true,
  },
  {
    id: "soft-glam-makeup",
    categoryId: "lashes-makeup",
    name: "Soft Glam Makeup",
    price: 110,
    duration: "75 min",
    description: "Radiant skin, defined eyes, and balanced tones for any event.",
  },
  {
    id: "bridal-preview",
    categoryId: "lashes-makeup",
    name: "Bridal Preview Session",
    price: 180,
    duration: "120 min",
    description: "Trial look with face charting and product longevity planning.",
  },
];

export const topServices = services.filter((service) => service.featured).slice(0, 6);

export const topServiceImages: Record<string, string> = {
  "precision-cut": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  balayage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
  "keratin-smoothing": "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80",
  "gel-manicure": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=80",
  "hydraglow-facial": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80",
  "lash-lift": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
};

export const categoryServiceFallbackImages: Record<ServiceCategoryId, string> = {
  "haircut-styling": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  "hair-color": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
  treatments: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80",
  nails: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=80",
  "facial-spa": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80",
  "lashes-makeup": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
};

export const servicesByCategory = serviceCategories.reduce((acc, category) => {
  acc[category.id] = services.filter((service) => service.categoryId === category.id);
  return acc;
}, {} as Record<ServiceCategoryId, ServiceItem[]>);

export function getRecommendedServices(categoryId?: ServiceCategoryId) {
  if (!categoryId) {
    return topServices;
  }

  const sameCategory = services.filter((service) => service.categoryId === categoryId);
  const otherCategoryFeatured = services.filter(
    (service) => service.categoryId !== categoryId && service.featured,
  );

  return [...sameCategory.slice(0, 2), ...otherCategoryFeatured.slice(0, 3)];
}
