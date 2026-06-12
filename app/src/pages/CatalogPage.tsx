import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Search, SlidersHorizontal, Grid3X3, LayoutList, X } from 'lucide-react';
import { products, categories, searchProducts, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { categoryLabelEs } from '../lib/productTranslations';

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { lang } = useLanguage();
  const T = translations[lang].catalog;

  const initialFilter = searchParams.get('filter') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    document.title = `${T.title} — BIOHACKS PHARMACEUTICAL`;
    return () => { document.title = 'BIOHACKS PHARMACEUTICAL'; };
  }, [T.title]);

  useEffect(() => {
    const filter = searchParams.get('filter') || 'all';
    const search = searchParams.get('search') || '';
    setActiveCategory(filter);
    setSearchQuery(search);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory === 'new') {
      result = products.filter(p => p.badge === 'new');
    } else if (activeCategory === 'sale') {
      result = products.filter(p => p.badge === 'sale');
    } else if (activeCategory !== 'all') {
      result = getProductsByCategory(activeCategory);
    }

    if (searchQuery.trim()) {
      const searchSet = new Set(searchProducts(searchQuery).map(p => p.id));
      result = result.filter(p => searchSet.has(p.id));
    }

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result = [...result].sort((a, b) => {
          const aScore = (a.badge === 'popular' ? 3 : a.badge === 'new' ? 2 : a.badge === 'sale' ? 1 : 0);
          const bScore = (b.badge === 'popular' ? 3 : b.badge === 'new' ? 2 : b.badge === 'sale' ? 1 : 0);
          return bScore - aScore;
        });
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    const newParams = new URLSearchParams(searchParams);
    if (key === 'all') {
      newParams.delete('filter');
    } else {
      newParams.set('filter', key);
    }
    setSearchParams(newParams);
    setMobileFiltersOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      newParams.set('search', searchQuery.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const getCategoryLabel = (c: { key: string; label: string }) =>
    lang === 'es' ? (categoryLabelEs[c.label] ?? c.label) : c.label;

  return (
    <div className="min-h-screen bg-[#F1EFE8] pt-20">
      {/* Header */}
      <div className="bg-[#042C53] py-16">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{T.title}</h1>
          <p className="text-[#85B7EB]/80 max-w-2xl">{T.desc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-8">
        {/* Search & Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5F5E5A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={T.searchPlaceholder}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm"
              />
            </div>
            <button type="submit" className="px-6 py-3 bg-[#378ADD] text-white text-sm font-medium hover:bg-[#185FA5] transition-colors">
              {T.searchBtn}
            </button>
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  const newParams = new URLSearchParams(searchParams);
                  newParams.delete('search');
                  setSearchParams(newParams);
                }}
                aria-label={T.clearSearch}
                className="px-4 py-3 border border-[#E6F1FB] bg-white text-[#5F5E5A] hover:text-[#042C53] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label={T.sortLabel}
              className="px-4 py-3 bg-white border border-[#E6F1FB] text-sm text-[#042C53] focus:outline-none focus:border-[#378ADD]"
            >
              <option value="featured">{T.sortFeatured}</option>
              <option value="price-low">{T.sortPriceLow}</option>
              <option value="price-high">{T.sortPriceHigh}</option>
              <option value="name">{T.sortName}</option>
            </select>

            <div className="hidden md:flex border border-[#E6F1FB] bg-white">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label={T.gridView}
                className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-[#378ADD] text-white' : 'text-[#5F5E5A] hover:text-[#042C53]'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-label={T.listView}
                className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-[#378ADD] text-white' : 'text-[#5F5E5A] hover:text-[#042C53]'}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              aria-label={T.toggleFilters}
              className="md:hidden p-3 bg-white border border-[#E6F1FB] text-[#5F5E5A]"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap gap-2 mb-8 ${mobileFiltersOpen ? 'block' : 'hidden md:flex'}`}>
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => handleCategoryChange(c.key)}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-medium transition-all duration-200 border ${
                activeCategory === c.key
                  ? 'bg-[#042C53] text-white border-[#042C53]'
                  : 'bg-white text-[#042C53]/70 border-[#D4E5F5] hover:border-[#378ADD] hover:text-[#378ADD]'
              }`}
            >
              {getCategoryLabel(c)}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleCategoryChange('new')}
            className={`px-4 py-2 text-xs tracking-wider uppercase font-medium transition-all duration-200 border ${
              activeCategory === 'new'
                ? 'bg-[#378ADD] text-white border-[#378ADD]'
                : 'bg-white text-[#042C53]/70 border-[#D4E5F5] hover:border-[#378ADD] hover:text-[#378ADD]'
            }`}
          >
            {T.newArrivals}
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange('sale')}
            className={`px-4 py-2 text-xs tracking-wider uppercase font-medium transition-all duration-200 border ${
              activeCategory === 'sale'
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-[#042C53]/70 border-[#D4E5F5] hover:border-red-600 hover:text-red-600'
            }`}
          >
            {T.onSale}
          </button>
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-[#5F5E5A]">
          {T.showing} <strong className="text-[#042C53]">{filteredProducts.length}</strong> {T.of} {products.length} {T.products}
          {searchQuery && (
            <span> {T.for} "<strong className="text-[#042C53]">{searchQuery}</strong>"</span>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-[#E6F1FB] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#042C53] mb-2">{T.noResults}</h3>
            <p className="text-[#5F5E5A] mb-6">{T.noResultsDesc}</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSearchParams(new URLSearchParams());
              }}
              className="btn-primary-bio"
            >
              {T.clearAll}
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} compact={viewMode === 'grid'} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
