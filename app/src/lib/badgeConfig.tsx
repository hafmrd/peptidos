import { TrendingUp, Sparkles, Flame } from 'lucide-react';

export const badgeConfig = {
  popular: { icon: <TrendingUp className="w-3 h-3" />, label: 'POPULAR', bg: 'bg-[#185FA5]' },
  new:     { icon: <Sparkles  className="w-3 h-3" />, label: 'NEW',     bg: 'bg-[#378ADD]' },
  sale:    { icon: <Flame     className="w-3 h-3" />, label: 'SALE',    bg: 'bg-red-600'   },
} as const;

export const badgeConfigLg = {
  popular: { icon: <TrendingUp className="w-4 h-4" />, label: 'POPULAR', bg: 'bg-[#185FA5]' },
  new:     { icon: <Sparkles  className="w-4 h-4" />, label: 'NEW',     bg: 'bg-[#378ADD]' },
  sale:    { icon: <Flame     className="w-4 h-4" />, label: 'SALE',    bg: 'bg-red-600'   },
} as const;
