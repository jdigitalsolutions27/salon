"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Book Appointment" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#ece5dd] bg-[rgba(248,246,243,0.95)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2" aria-label="LuxeGlow Salon home page">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d3b18b] to-[#b7895c] text-[#fff9f2] shadow-lg shadow-[#d6c0a7]/40">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-serif text-2xl text-[#1f1a17]">LuxeGlow Salon</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition hover:text-[#8b6e52]",
                  isActive ? "text-[#8b6e52]" : "text-[#3d342f]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/booking"
            className="rounded-full bg-[#1f2529] px-6 py-3 text-sm font-semibold text-[#f6f2ed] transition hover:-translate-y-0.5 hover:bg-[#2f3840]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dfd3c6] text-[#1f1a17] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-[#ece5dd] bg-[#fbf9f6] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    isActive ? "bg-[#efe6dc] text-[#8b6e52]" : "text-[#3d342f] hover:bg-[#f2ece4]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#1f2529] px-4 py-3 text-center text-sm font-semibold text-[#f6f2ed]"
            >
              Book Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
