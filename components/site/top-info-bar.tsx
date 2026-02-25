import { Clock3, MapPin, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site";

export function TopInfoBar() {
  return (
    <div className="bg-[#1f2529] text-[#f6f2ed]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.address}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-1.5 transition hover:text-[#e5c79c]">
            <PhoneCall className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
          <span className="inline-flex items-center gap-1.5 text-[#d8ccc0]">
            <Clock3 className="h-3.5 w-3.5" />
            {siteConfig.hours}
          </span>
        </div>
      </div>
    </div>
  );
}
