import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import {
  Search, X, ChevronDown, SlidersHorizontal,
  LayoutGrid, Grid2x2, Columns3,
} from 'lucide-react';
import { products, categories, searchProducts, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Slider } from '../components/ui/slider';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { categoryLabelEs } from '../lib/productTranslations';

const PRICE_MIN = 0;
const PRICE_MAX = 400;

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [columnCount, setColumnCount] = useState<2 | 3 | 4>(3);
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
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

  const categoriesWithCounts = useMemo(() => {
    return categories.map(c => ({
      ...c,
      count: c.key === 'all' ? products.length : getProductsByCategory(c.key).length,
    }));
  }, []);

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

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (onlyAvailable) {
      result = result.filter(p => p.inStock !== false);
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
  }, [activeCategory, searchQuery, sortBy, priceRange, onlyAvailable]);

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

  const handleReset = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setPriceRange([PRICE_MIN, PRICE_MAX]);
    setOnlyAvailable(false);
    setSearchParams(new URLSearchParams());
  };

  const getCategoryLabel = (c: { key: string; label: string }) =>
    lang === 'es' ? (categoryLabelEs[c.label] ?? c.label) : c.label;

  const colClass: Record<2 | 3 | 4, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  const sidebarCategories = [
    ...categoriesWithCounts,
    { key: 'new', label: T.newArrivals ?? 'New Arrivals', count: products.filter(p => p.badge === 'new').length },
    { key: 'sale', label: T.onSale ?? 'On Sale', count: products.filter(p => p.badge === 'sale').length },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FC] pt-20">
      {/* Header */}
      <div className="relative bg-[#042C53] py-16 overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#378ADD]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#185FA5]/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto section-padding relative">
          <span className="inline-block text-[#85B7EB] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            BIOHACKS PHARMACEUTICAL
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{T.title}</h1>
          <p className="text-[#85B7EB]/80 max-w-2xl">{T.desc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-8">
        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Hide/show sidebar */}
          <button
            type="button"
            onClick={() => setSidebarOpen(v => !v)}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E6F1FB] rounded-lg text-sm text-[#042C53] font-medium hover:border-[#378ADD] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#378ADD]" />
            {sidebarOpen ? 'Esconder filtros' : 'Mostrar filtros'}
          </button>

          {/* Mobile filter toggle */}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E6F1FB] rounded-lg text-sm text-[#042C53] font-medium"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#378ADD]" />
            Filtros
          </button>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex gap-2 flex-1 min-w-0">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9BB9D4]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={T.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E6F1FB] rounded-lg focus:border-[#378ADD] focus:outline-none text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Limpiar búsqueda"
                  onClick={() => {
                    setSearchQuery('');
                    const newParams = new URLSearchParams(searchParams);
                    newParams.delete('search');
                    setSearchParams(newParams);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9BB9D4] hover:text-[#042C53]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>

          {/* Right controls */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-[#5F5E5A] hidden sm:inline">
              <strong className="text-[#042C53]">{filteredProducts.length}</strong> {T.products}
            </span>

            {/* Column toggle */}
            <div className="hidden lg:flex border border-[#E6F1FB] bg-white rounded-lg overflow-hidden">
              {([2, 3, 4] as const).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setColumnCount(n)}
                  aria-label={`${n} columns`}
                  className={`p-2.5 transition-colors ${columnCount === n ? 'bg-[#378ADD] text-white' : 'text-[#9BB9D4] hover:text-[#042C53]'}`}
                >
                  {n === 2 && <Grid2x2 className="w-4 h-4" />}
                  {n === 3 && <Columns3 className="w-4 h-4" />}
                  {n === 4 && <LayoutGrid className="w-4 h-4" />}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label={T.sortLabel}
                className="appearance-none pl-3 pr-8 py-2.5 bg-white border border-[#E6F1FB] rounded-lg text-sm text-[#042C53] focus:outline-none focus:border-[#378ADD] cursor-pointer"
              >
                <option value="featured">{T.sortFeatured}</option>
                <option value="price-low">{T.sortPriceLow}</option>
                <option value="price-high">{T.sortPriceHigh}</option>
                <option value="name">{T.sortName}</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9BB9D4] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Layout: sidebar + grid */}
        <div className="flex gap-6 items-start">
          {/* Sidebar */}
          {sidebarOpen && (
            <aside className="hidden md:flex flex-col w-56 flex-shrink-0 bg-white border border-[#E6F1FB] rounded-xl p-5 sticky top-24 gap-5">
              {/* Categories */}
              <div>
                <p className="text-[10px] font-bold text-[#9BB9D4] tracking-[0.15em] uppercase mb-3">Categoría</p>
                <ul className="flex flex-col gap-0.5">
                  {sidebarCategories.map((c) => {
                    const isActive = activeCategory === c.key;
                    const isNew = c.key === 'new';
                    const isSale = c.key === 'sale';
                    return (
                      <li key={c.key}>
                        <button
                          type="button"
                          onClick={() => handleCategoryChange(c.key)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            isActive
                              ? isSale
                                ? 'bg-red-50 text-red-600'
                                : isNew
                                  ? 'bg-[#EBF5FF] text-[#378ADD]'
                                  : 'bg-[#EBF5FF] text-[#042C53]'
                              : 'text-[#5F5E5A] hover:bg-[#F4F7FC] hover:text-[#042C53]'
                          }`}
                        >
                          <span>{getCategoryLabel({ key: c.key, label: c.label })}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded font-semibold ${
                            isActive
                              ? isSale ? 'bg-red-100 text-red-500' : 'bg-[#D4E8FF] text-[#378ADD]'
                              : 'bg-[#F4F7FC] text-[#9BB9D4]'
                          }`}>
                            {c.count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Price range */}
              <div>
                <p className="text-[10px] font-bold text-[#9BB9D4] tracking-[0.15em] uppercase mb-3">Precio</p>
                <Slider
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                  step={10}
                  value={priceRange}
                  onValueChange={(v) => setPriceRange(v as [number, number])}
                  className="mb-3"
                />
                <div className="flex items-center justify-between text-xs text-[#5F5E5A] font-medium">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Only available toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5F5E5A]">Solo disponibles</span>
                <button
                  type="button"
                  aria-label={onlyAvailable ? 'Mostrar todos los productos' : 'Mostrar solo disponibles'}
                  onClick={() => setOnlyAvailable(v => !v)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${onlyAvailable ? 'bg-[#378ADD]' : 'bg-[#E6F1FB]'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${onlyAvailable ? 'translate-x-5' : ''}`} />
                </button>
              </div>

              {/* Reset */}
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2 text-xs font-semibold text-[#378ADD] border border-[#D4E5F5] rounded-lg hover:bg-[#EBF5FF] transition-colors"
              >
                Restablecer filtros
              </button>
            </aside>
          )}

          {/* Mobile sidebar drawer */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="relative ml-auto w-72 h-full bg-white overflow-y-auto p-6 flex flex-col gap-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#042C53]">Filtros</span>
                  <button type="button" aria-label="Cerrar filtros" onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5 text-[#9BB9D4]" />
                  </button>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#9BB9D4] tracking-[0.15em] uppercase mb-3">Categoría</p>
                  <ul className="flex flex-col gap-0.5">
                    {sidebarCategories.map((c) => (
                      <li key={c.key}>
                        <button
                          type="button"
                          onClick={() => handleCategoryChange(c.key)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeCategory === c.key ? 'bg-[#EBF5FF] text-[#042C53]' : 'text-[#5F5E5A] hover:bg-[#F4F7FC]'
                          }`}
                        >
                          <span>{getCategoryLabel({ key: c.key, label: c.label })}</span>
                          <span className="text-xs bg-[#F4F7FC] text-[#9BB9D4] px-1.5 py-0.5 rounded">{c.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#9BB9D4] tracking-[0.15em] uppercase mb-3">Precio</p>
                  <Slider
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={10}
                    value={priceRange}
                    onValueChange={(v) => setPriceRange(v as [number, number])}
                    className="mb-3"
                  />
                  <div className="flex items-center justify-between text-xs text-[#5F5E5A] font-medium">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#5F5E5A]">Solo disponibles</span>
                  <button
                    type="button"
                    aria-label={onlyAvailable ? 'Mostrar todos los productos' : 'Mostrar solo disponibles'}
                    onClick={() => setOnlyAvailable(v => !v)}
                    className={`relative w-10 h-5 rounded-full transition-colors ${onlyAvailable ? 'bg-[#378ADD]' : 'bg-[#E6F1FB]'}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${onlyAvailable ? 'translate-x-5' : ''}`} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2 text-xs font-semibold text-[#378ADD] border border-[#D4E5F5] rounded-lg hover:bg-[#EBF5FF] transition-colors"
                >
                  Restablecer filtros
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-12 h-12 text-[#E6F1FB] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#042C53] mb-2">{T.noResults}</h3>
                <p className="text-[#5F5E5A] mb-6">{T.noResultsDesc}</p>
                <button type="button" onClick={handleReset} className="btn-primary-bio">
                  {T.clearAll}
                </button>
              </div>
            ) : (
              <div className={`grid gap-4 ${colClass[columnCount]}`}>
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} compact />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
