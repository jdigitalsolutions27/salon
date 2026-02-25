"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <div className="rounded-3xl border border-[#e5dbcf] bg-white p-6 shadow-[0_18px_30px_rgba(46,33,21,0.07)]">
      <div className="mb-4 flex items-center gap-1 text-[#c79b5d]" aria-label="5 star testimonials">
        {Array.from({ length: active.rating }).map((_, index) => (
          <Star key={`${active.id}-${index}`} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="space-y-4"
        >
          <blockquote className="font-serif text-2xl leading-snug text-[#1f1a17]">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold text-[#2c2420]">{active.name}</p>
            <p className="text-sm text-[#756b62]">
              {active.role} - {active.service}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition ${
              index === activeIndex ? "w-8 bg-[#8b6e52]" : "w-2.5 bg-[#ddcfbe] hover:bg-[#cdb89f]"
            }`}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
