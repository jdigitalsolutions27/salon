import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About Our Team",
  description: "Meet the licensed specialists behind LuxeGlow Salon's premium client experience.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-12">
      <Reveal>
        <section className="rounded-3xl border border-[#e5d9cc] bg-white p-7 shadow-[0_14px_28px_rgba(43,31,20,0.07)] sm:p-10">
          <SectionHeading
            eyebrow="About LuxeGlow"
            title="A premium salon built on trust, skill, and consistency"
            description="Our team combines modern artistry with strict care standards so every visit feels elevated and safe."
          />
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#5f5852] sm:text-base">
            LuxeGlow Salon was created for clients who value both style and standards. From the consultation desk to the finishing mirror,
            we focus on healthy outcomes, practical maintenance, and polished details that fit your lifestyle.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <SectionHeading
            eyebrow="Our Team"
            title="Licensed specialists you can rely on"
            description="Experts across hair, skin, nails, and beauty artistry."
          />
          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.id} className="overflow-hidden rounded-3xl border border-[#e5d9cc] bg-white shadow-[0_14px_26px_rgba(45,33,21,0.08)]">
                <div className="relative h-72">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-serif text-3xl text-[#1f1a17]">{member.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8b6e52]">
                    {member.role} | {member.experience}
                  </p>
                  <p className="text-sm text-[#5f5852]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-[#e3d6c7] bg-gradient-to-r from-[#f8f1e8] to-[#fdfaf7] p-8">
          <h2 className="font-serif text-4xl text-[#1f1a17]">Our Standards</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#dfcfbe] bg-white p-4 text-sm text-[#5a524b]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <BadgeCheck className="h-4 w-4 text-[#8b6e52]" />
                Hygiene First
              </p>
              <p className="mt-2">Sterilized tools, sanitized workstations, and single-use disposables for every guest.</p>
            </div>
            <div className="rounded-2xl border border-[#dfcfbe] bg-white p-4 text-sm text-[#5a524b]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <Sparkles className="h-4 w-4 text-[#8b6e52]" />
                Premium Product Approach
              </p>
              <p className="mt-2">We curate professional formulas for hair and skin health, not quick fixes.</p>
            </div>
            <div className="rounded-2xl border border-[#dfcfbe] bg-white p-4 text-sm text-[#5a524b]">
              <p className="inline-flex items-center gap-2 font-semibold text-[#3e342c]">
                <BadgeCheck className="h-4 w-4 text-[#8b6e52]" />
                Consultation-Led Care
              </p>
              <p className="mt-2">Every service starts with clear goals, practical guidance, and transparent pricing.</p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
