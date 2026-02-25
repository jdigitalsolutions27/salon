import type { ReactNode } from "react";
import { Navbar } from "@/components/site/navbar";
import { TopInfoBar } from "@/components/site/top-info-bar";
import { SiteFooter } from "@/components/site/site-footer";
import { MobileBookCta } from "@/components/site/mobile-book-cta";
import { FloatingContactButtons } from "@/components/site/floating-contact-buttons";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="mx-auto w-full max-w-[1600px] px-4 pb-24 pt-6 sm:px-6 md:pb-6">{children}</main>
      <SiteFooter />
      <FloatingContactButtons />
      <MobileBookCta />
    </>
  );
}
