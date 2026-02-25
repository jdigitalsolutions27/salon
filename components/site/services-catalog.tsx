"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  categoryServiceFallbackImages,
  getRecommendedServices,
  serviceCategories,
  servicesByCategory,
  topServiceImages,
  topServices,
  type ServiceCategoryId,
} from "@/data/services";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/site/service-card";

interface ServicesCatalogProps {
  initialCategory?: string;
}

export function ServicesCatalog({ initialCategory }: ServicesCatalogProps) {
  const defaultCategory = serviceCategories[0].id;
  const initial = (serviceCategories.find((item) => item.id === initialCategory)?.id ?? defaultCategory) as ServiceCategoryId;
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId>(initial);
  const [brokenTopImages, setBrokenTopImages] = useState<Record<string, boolean>>({});
  const [loadedTopImages, setLoadedTopImages] = useState<Record<string, boolean>>({});

  const activeServices = servicesByCategory[activeCategory] ?? [];
  const recommended = getRecommendedServices(activeCategory);
  const getTopImage = (serviceId: string, categoryId: string) =>
    brokenTopImages[serviceId]
      ? categoryServiceFallbackImages[categoryId as ServiceCategoryId]
      : (topServiceImages[serviceId] ?? categoryServiceFallbackImages[categoryId as ServiceCategoryId]);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="font-serif text-3xl text-[#1f1a17]">Top Services</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {topServices.map((service) => (
            <motion.article
              key={service.id}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="group overflow-hidden rounded-3xl border border-[#e8ddd0] bg-white shadow-[0_14px_28px_rgba(45,33,22,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(45,33,22,0.12)]"
            >
              <div className="relative h-44">
                {!loadedTopImages[service.id] ? <div className="absolute inset-0 z-[1] shimmer-surface" aria-hidden="true" /> : null}
                <Image
                  src={getTopImage(service.id, service.categoryId)}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition duration-700 group-hover:scale-105",
                    loadedTopImages[service.id] ? "opacity-100" : "opacity-0",
                  )}
                  onLoad={() => setLoadedTopImages((current) => ({ ...current, [service.id]: true }))}
                  onError={() => {
                    setBrokenTopImages((current) => ({ ...current, [service.id]: true }));
                    setLoadedTopImages((current) => ({ ...current, [service.id]: false }));
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                  <p className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6f543b]">
                    Most booked
                  </p>
                  <p className="rounded-full bg-[#1f2529]/90 px-3 py-1 text-xs font-semibold text-[#f8f2ea]">${service.price}</p>
                </div>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="font-serif text-3xl leading-none text-[#1f1a17]">{service.name}</h3>
                <p className="text-sm text-[#5f5852]">{service.description}</p>
                <Link
                  href={`/booking?category=${service.categoryId}&service=${service.id}`}
                  className="inline-flex rounded-full bg-[#1f2529] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f6f2ed] transition hover:bg-[#2f3941]"
                >
                  Book now
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Service categories">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                activeCategory === category.id
                  ? "border-[#1f2529] bg-[#1f2529] text-[#f6f2ed]"
                  : "border-[#d8cab9] bg-white text-[#4f453f] hover:border-[#b89874] hover:text-[#6f543b]",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {activeServices.map((service) => (
            <ServiceCard key={service.id} service={service} categoryId={activeCategory} />
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-[#e8ddd0] bg-[#fffdf9] p-6">
        <h2 className="font-serif text-3xl text-[#1f1a17]">Recommended For You</h2>
        <p className="max-w-2xl text-sm text-[#5f5852]">
          Based on your selected category, these pair well to complete your appointment and maximize your results.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommended.map((item) => (
            <div key={item.id} className="rounded-2xl border border-[#eadfce] bg-white p-4">
              <h3 className="font-medium text-[#1f1a17]">{item.name}</h3>
              <p className="mt-2 text-sm text-[#6a625b]">{item.duration}</p>
              <Link
                href={`/booking?category=${item.categoryId}&service=${item.id}`}
                className="mt-4 inline-flex rounded-full border border-[#d0beaa] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#6f543b] transition hover:bg-[#f5eee6]"
              >
                Add to booking
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
