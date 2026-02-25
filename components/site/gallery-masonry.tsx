"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryMasonry() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const items = useMemo(
    () => galleryItems.filter((item) => (activeFilter === "all" ? true : item.category === activeFilter)),
    [activeFilter],
  );

  const selected = items.find((item) => item.id === selectedId) ?? galleryItems.find((item) => item.id === selectedId);
  const getImageForItem = (id: string, image: string, fallbackImage: string) =>
    brokenImages[id] ? fallbackImage : image;

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveFilter(category.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              activeFilter === category.value
                ? "border-[#1f2529] bg-[#1f2529] text-[#f6f2ed]"
                : "border-[#dac9b8] bg-white text-[#4e433b] hover:border-[#b99976]",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedId(item.id)}
            className={cn(
              "group relative mb-4 block w-full overflow-hidden rounded-3xl border border-[#eadfce] bg-white text-left shadow-[0_12px_26px_rgba(42,30,20,0.09)] break-inside-avoid",
              index % 3 === 0 ? "h-[330px]" : index % 2 === 0 ? "h-[250px]" : "h-[290px]",
            )}
          >
            {!loadedImages[item.id] ? <div className="absolute inset-0 z-[1] shimmer-surface" aria-hidden="true" /> : null}
            <Image
              src={getImageForItem(item.id, item.image, item.fallbackImage)}
              alt={`${item.title} ${item.stage}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover transition duration-500 group-hover:scale-105",
                loadedImages[item.id] ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setLoadedImages((current) => ({ ...current, [item.id]: true }))}
              onError={() => {
                setBrokenImages((current) => ({ ...current, [item.id]: true }));
                setLoadedImages((current) => ({ ...current, [item.id]: false }));
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="mb-2 inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6f543b]">
                {item.stage === "before" ? "Before" : "After"}
              </p>
              <h3 className="font-serif text-xl text-white">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[#2e241e]"
              onClick={() => setSelectedId(null)}
              aria-label="Close image"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative h-[70vh] w-full">
              {!loadedImages[selected.id] ? <div className="absolute inset-0 z-[1] shimmer-surface" aria-hidden="true" /> : null}
              <Image
                src={getImageForItem(selected.id, selected.image, selected.fallbackImage)}
                alt={selected.title}
                fill
                sizes="100vw"
                className={cn("object-cover transition-opacity duration-500", loadedImages[selected.id] ? "opacity-100" : "opacity-0")}
                priority
                onLoad={() => setLoadedImages((current) => ({ ...current, [selected.id]: true }))}
                onError={() => {
                  setBrokenImages((current) => ({ ...current, [selected.id]: true }));
                  setLoadedImages((current) => ({ ...current, [selected.id]: false }));
                }}
              />
            </div>
            <div className="space-y-1 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#86674a]">{selected.stage}</p>
              <h3 className="font-serif text-2xl text-[#1f1a17]">{selected.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
