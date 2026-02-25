export interface PromoPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  badge: string;
}

export const promoPackages: PromoPackage[] = [
  {
    id: "p1",
    title: "Glow Reset Package",
    description: "Precision Cut + Bond Repair + Signature Blowout",
    price: "$210",
    badge: "Most Booked",
  },
  {
    id: "p2",
    title: "Bridal Preview Bundle",
    description: "Hair Trial + Makeup Trial + Lash Lift",
    price: "$330",
    badge: "Limited Slots",
  },
  {
    id: "p3",
    title: "Monthly Self-Care Club",
    description: "HydraGlow Facial + Gel Manicure each month",
    price: "$165/mo",
    badge: "Best Value",
  },
];
