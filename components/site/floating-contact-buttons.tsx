import { MessageCircleMore, Send } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={`https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#23bf5e]/35 transition hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircleMore className="h-5 w-5" />
      </a>
      <a
        href={siteConfig.messenger}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-[#216ad3]/35 transition hover:-translate-y-0.5"
        aria-label="Chat on Messenger"
      >
        <Send className="h-5 w-5" />
      </a>
    </div>
  );
}
