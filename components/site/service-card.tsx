import Link from "next/link";
import { Clock3 } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import { formatCurrency } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  categoryId: string;
}

export function ServiceCard({ service, categoryId }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-[#e8ddd0] bg-white p-6 shadow-[0_12px_25px_rgba(52,39,28,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(52,39,28,0.12)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-2xl text-[#1f1a17]">{service.name}</h3>
        <span className="rounded-full bg-[#f4ece2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#8b6e52]">
          {formatCurrency(service.price)}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#5f5852]">{service.description}</p>
      <div className="mt-4 flex items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[#7a726b]">
          <Clock3 className="h-3.5 w-3.5" />
          {service.duration}
        </p>
        <Link
          href={`/booking?category=${categoryId}&service=${service.id}`}
          className="rounded-full border border-[#d6c2ad] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6f543b] transition group-hover:bg-[#1f2529] group-hover:text-[#f6f2ed]"
        >
          Book This
        </Link>
      </div>
    </article>
  );
}
