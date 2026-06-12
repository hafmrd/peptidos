import { Link } from 'react-router';
import { ArrowRight, Beaker, Eye } from 'lucide-react';
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
        className="group bg-white border border-[#E6F1FB] hover:border-[#378ADD]/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden rounded-xl"
      >
        {/* Image panel */}
        <div className="relative bg-[#F8FAFD] border-b border-[#E6F1FB] flex items-center justify-center h-44 overflow-hidden rounded-t-xl">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              className="h-36 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <Beaker className="w-10 h-10 text-[#D4E5F5]" />
          )}
          {/* Eye hover overlay */}
          <div className="absolute inset-0 bg-[#042C53]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
              <Eye className="w-5 h-5 text-white" />
            </div>
          </div>
          {p.badge && (
            <span className={`absolute top-3 right-3 z-10 ${badgeConfig[p.badge].bg} text-white text-[10px] font-bold tracking-wider px-2 py-1 rounded flex items-center gap-1 shadow-lg`}>
              {badgeConfig[p.badge].icon}
              {badgeLabelMap[p.badge as keyof typeof badgeLabelMap] ?? badgeConfig[p.badge].label}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-bold text-[#042C53] mb-1 group-hover:text-[#185FA5] transition-colors">
            {p.name}
          </h3>
          <p className="text-xs text-[#5F5E5A] mb-3 line-clamp-2 leading-relaxed flex-1">{p.shortDesc}</p>
          <div className="flex items-center justify-between pt-3 border-t border-[#E6F1FB]">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#042C53]">${p.price}</span>
              {p.originalPrice && (
                <span className="text-xs text-[#5F5E5A] line-through">${p.originalPrice}</span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-[#9BB9D4] group-hover:text-[#378ADD] group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${p.id}`}
      className="group bg-white border border-[#E6F1FB] hover:border-[#378ADD]/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden rounded-xl"
    >
      {/* Image panel */}
      <div className="relative bg-[#F8FAFD] border-b border-[#E6F1FB] flex items-center justify-center h-52 overflow-hidden rounded-t-xl">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="h-40 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Beaker className="w-12 h-12 text-[#D4E5F5]" />
        )}
        {/* Eye hover overlay */}
        <div className="absolute inset-0 bg-[#042C53]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
            <Eye className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1.5">
          {p.badge && (
            <span className={`${badgeConfig[p.badge].bg} text-white text-[10px] font-bold tracking-wider px-2 py-1 rounded flex items-center gap-1 shadow-lg`}>
              {badgeConfig[p.badge].icon}
              {badgeLabelMap[p.badge as keyof typeof badgeLabelMap] ?? badgeConfig[p.badge].label}
            </span>
          )}
          <span className="text-[10px] text-[#5F5E5A] tracking-wider uppercase bg-white border border-[#E6F1FB] px-2 py-0.5 rounded">
            {p.categoryLabel}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#042C53] mb-1 group-hover:text-[#185FA5] transition-colors">
          {p.name}
        </h3>
        <p className="text-sm text-[#5F5E5A] mb-3 leading-relaxed line-clamp-2 flex-1">
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
          <span className="text-xs text-[#378ADD] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            {T.viewDetails} <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
