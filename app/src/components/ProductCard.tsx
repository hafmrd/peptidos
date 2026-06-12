import { Link } from 'react-router';
import { ArrowRight, Beaker } from 'lucide-react';
import type { Product } from '../data/products';
import { badgeConfig } from '../lib/badgeConfig';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  if (compact) {
    return (
      <Link
        to={`/product/${product.id}`}
        className="group bg-white border border-[#E6F1FB] hover:border-[#378ADD]/40 hover:shadow-lg transition-all duration-300 p-5"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="p-2.5 bg-[#E6F1FB] group-hover:bg-[#378ADD]/10 transition-colors">
            <Beaker className="w-4 h-4 text-[#378ADD]" />
          </div>
          {product.badge && (
            <span className={`${badgeConfig[product.badge].bg} text-white text-[10px] font-bold tracking-wider px-2 py-1 flex items-center gap-1`}>
              {badgeConfig[product.badge].icon}
              {badgeConfig[product.badge].label}
            </span>
          )}
        </div>
        <h3 className="text-base font-bold text-[#042C53] mb-1 group-hover:text-[#185FA5] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#5F5E5A] mb-3 line-clamp-2">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#042C53]">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#5F5E5A] line-through">${product.originalPrice}</span>
            )}
          </div>
          <ArrowRight className="w-4 h-4 text-[#E6F1FB] group-hover:text-[#378ADD] transition-colors" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white border border-[#E6F1FB] hover:border-[#378ADD]/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-[#E6F1FB] group-hover:bg-[#378ADD]/10 transition-colors">
            <Beaker className="w-5 h-5 text-[#378ADD]" />
          </div>
          <div className="flex flex-col items-end gap-1">
            {product.badge && (
              <span className={`${badgeConfig[product.badge].bg} text-white text-[10px] font-bold tracking-wider px-2 py-1 flex items-center gap-1`}>
                {badgeConfig[product.badge].icon}
                {badgeConfig[product.badge].label}
              </span>
            )}
            <span className="text-[10px] text-[#5F5E5A] tracking-wider uppercase bg-[#F1EFE8] px-2 py-0.5">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#042C53] mb-1 group-hover:text-[#185FA5] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#5F5E5A] mb-3 leading-relaxed line-clamp-2">
          {product.shortDesc}
        </p>

        <div className="flex items-center gap-2 text-xs text-[#378ADD] font-medium mb-4">
          <Beaker className="w-3 h-3" />
          {product.specs}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#E6F1FB]">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-[#042C53]">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#5F5E5A] line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className="text-xs text-[#378ADD] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
