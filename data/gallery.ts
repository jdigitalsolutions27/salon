export type GalleryCategory = "hair" | "nails" | "facial" | "makeup";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  stage: "before" | "after";
  title: string;
  image: string;
  fallbackImage: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "hair",
    stage: "before",
    title: "Color correction prep",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g2",
    category: "hair",
    stage: "after",
    title: "Dimensional balayage finish",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g3",
    category: "hair",
    stage: "before",
    title: "Dry texture before treatment",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g4",
    category: "hair",
    stage: "after",
    title: "Keratin glass-hair result",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g5",
    category: "nails",
    stage: "before",
    title: "Natural nails before shaping",
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g6",
    category: "nails",
    stage: "after",
    title: "Minimal chrome manicure",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g7",
    category: "nails",
    stage: "after",
    title: "Soft glam bridal nails",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g8",
    category: "facial",
    stage: "before",
    title: "Dull skin before hydra facial",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g9",
    category: "facial",
    stage: "after",
    title: "Post-facial hydration glow",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g10",
    category: "makeup",
    stage: "before",
    title: "Base prep before event makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g11",
    category: "makeup",
    stage: "after",
    title: "Soft glam event finish",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g12",
    category: "makeup",
    stage: "after",
    title: "Lash lift and tint reveal",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653c1?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
];

export const galleryCategories: { label: string; value: GalleryCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Hair", value: "hair" },
  { label: "Nails", value: "nails" },
  { label: "Facial", value: "facial" },
  { label: "Makeup", value: "makeup" },
];
