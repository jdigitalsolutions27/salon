import Link from "next/link";

export function MobileBookCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d7c8b8] bg-[rgba(251,249,246,0.96)] p-3 shadow-[0_-8px_25px_rgba(36,28,22,0.12)] backdrop-blur md:hidden">
      <Link
        href="/booking"
        className="block rounded-full bg-[#1f2529] py-3 text-center text-sm font-semibold text-[#f7f2eb]"
        aria-label="Book now"
      >
        Book Now
      </Link>
    </div>
  );
}
