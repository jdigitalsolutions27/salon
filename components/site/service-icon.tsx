import {
  Hand,
  Leaf,
  Palette,
  Scissors,
  Sparkles,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  hand: Hand,
  leaf: Leaf,
  wand: WandSparkles,
};

interface ServiceIconProps {
  icon: string;
  className?: string;
}

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  const Icon = iconMap[icon] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
