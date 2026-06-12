import { Link } from 'react-router';
import { ArrowRight, Beaker } from 'lucide-react';
import type { Product } from '../data/products';
import { badgeConfig } from '../lib/badgeConfig';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { getProductLocalized } from '../lib/productTranslations';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const { lang } = useLanguage();
  const T = translations[lang].product;
  const p = getProductLocalized(product, lang);
  const badgeLabelMap = translations[lang].badges;

  if (compact) {
    return (
      <Link
        to={`/product/${p.id}`}
        className="group bg-white border border-[#E6F1FB] hover:border-[#378ADD]/40 hover:shadow-lg transition-all duration-300 p-5"
      >
        <div className="flex items-start justify-between mb-3">
          {p.image ? (
            <img src={p.image} alt={p.name} className="w-16 h-20 object-contain" />
          ) : (
            <div className="p-2.5 bg-[#E6F1FB] group-hover:bg-[#378ADD]/10 transition-colors">
              <Beaker className="w-4 h-4 text-[#378ADD]" />
            </div>
          )}
          {p.badge && (
            <span className={`${badgeConfig[p.badge].bg} text-white text-[10px] font-bold tracking-wider px-2 py-1 flex items-center gap-1`}>
              {badgeConfig[p.badge].icon}
              {badgeLabelMap[p.badge as keyof typeof badgeLabelMap] ?? badgeConfig[p.badge].label}
            </span>
          )}
        </div>
        <h3 className="text-base font-bold text-[#042C53] mb-1 group-hover:text-[#185FA5] transition-colors">
          {p.name}
        </h3>
        <p className="text-xs text-[#042C53]/60 mb-3 line-clamp-2">{p.shortDesc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#042C53]">${p.price}</span>
            {p.originalPrice && (
              <span className="text-sm text-[#5F5E5A] line-through">${p.originalPrice}</span>
            )}
          </div>
          <ArrowRight className="w-4 h-4 text-[#9BB9D4] group-hover:text-[#378ADD] transition-colors" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${p.id}`}
      className="group bg-white border border-[#E6F1FB] hover:border-[#378ADD]/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          {p.image ? (
            <img src={p.image} alt={p.name} className="w-20 h-24 object-contain" />
          ) : (
            <div className="p-3 bg-[#E6F1FB] group-hover:bg-[#378ADD]/10 transition-colors">
              <Beaker className="w-5 h-5 text-[#378ADD]" />
            </div>
          )}
          <div className="flex flex-col items-end gap-1">
            {p.badge && (
              <span className={`${badgeConfig[p.badge].bg} text-white text-[10px] font-bold tracking-wider px-2 py-1 flex items-center gap-1`}>
                {badgeConfig[p.badge].icon}
                {badgeLabelMap[p.badge as keyof typeof badgeLabelMap] ?? badgeConfig[p.badge].label}
              </span>
            )}
            <span className="text-[10px] text-[#042C53] tracking-wider uppercase bg-[#E6F1FB] px-2 py-0.5">
              {p.categoryLabel}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#042C53] mb-1 group-hover:text-[#185FA5] transition-colors">
          {p.name}
        </h3>
        <p className="text-sm text-[#042C53]/60 mb-3 leading-relaxed line-clamp-2">
          {p.shortDesc}
        </p>

        <div className="flex items-center gap-2 text-xs text-[#378ADD] font-medium mb-4">
          <Beaker className="w-3 h-3" />
          {p.specs}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#E6F1FB]">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-[#042C53]">${p.price}</span>
            {p.originalPrice && (
              <span className="text-sm text-[#5F5E5A] line-through">${p.originalPrice}</span>
            )}
          </div>
          <span className="text-xs text-[#378ADD] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            {T.viewDetails} <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
