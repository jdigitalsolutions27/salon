export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Maya Chen",
    role: "Creative Director",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=700&q=80",
    bio: "Specializes in precision cuts, lived-in color, and custom consultations.",
  },
  {
    id: "tm2",
    name: "Elena Brooks",
    role: "Senior Colorist",
    experience: "9 years",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80",
    bio: "Known for dimensional blonding, glossing, and healthy color transitions.",
  },
  {
    id: "tm3",
    name: "Rhea Patel",
    role: "Skin & Beauty Specialist",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=700&q=80",
    bio: "Delivers glow-focused facials, lash artistry, and occasion makeup looks.",
  },
];
