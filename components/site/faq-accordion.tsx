"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const open = faq.id === openId;

        return (
          <div key={faq.id} className="rounded-2xl border border-[#e7ddcf] bg-white p-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenId(open ? null : faq.id)}
              aria-expanded={open}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <span className="font-medium text-[#2b231e]">{faq.question}</span>
              <ChevronDown className={cn("h-4 w-4 text-[#8b6e52] transition", open && "rotate-180")} />
            </button>

            {open ? (
              <div id={`faq-panel-${faq.id}`} className="mt-3 text-sm leading-relaxed text-[#5f5852]">
                {faq.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
