import { SkeletonCard } from "@/components/ui/skeleton-card";

export default function GalleryLoading() {
  return (
    <div className="space-y-6 py-8">
      <div className="h-24 rounded-3xl shimmer-surface" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <SkeletonCard key={`gallery-skeleton-${index}`} className="h-72" />
        ))}
      </div>
    </div>
  );
}
