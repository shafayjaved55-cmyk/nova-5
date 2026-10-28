import { Cloud, Code2, PenTool, ShoppingBag, Smartphone, TrendingUp } from "lucide-react";

const icons: Record<string, typeof Code2> = {
  code: Code2,
  smartphone: Smartphone,
  pen: PenTool,
  trending: TrendingUp,
  bag: ShoppingBag,
  cloud: Cloud,
};

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Code2;
  return <Icon className={className} strokeWidth={1.8} />;
}
