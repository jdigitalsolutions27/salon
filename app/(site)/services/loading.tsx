import { SkeletonCard } from "@/components/ui/skeleton-card";

export default function ServicesLoading() {
  return (
    <div className="space-y-6 py-8">
      <div className="h-24 rounded-3xl shimmer-surface" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={`services-skeleton-${index}`} className="h-64" />
        ))}
      </div>
    </div>
  );
}
