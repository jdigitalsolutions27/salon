import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return <div className={cn("h-56 rounded-2xl shimmer-surface", className)} aria-hidden="true" />;
}
