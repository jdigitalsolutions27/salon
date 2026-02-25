import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", centered && "text-center", className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6e52]">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl leading-tight text-[#1f1a17] sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-[#5f5852] sm:text-base">{description}</p> : null}
    </div>
  );
}
