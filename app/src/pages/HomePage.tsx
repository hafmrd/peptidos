import { useState } from 'react';
import { Link } from 'react-router';
import {
  FlaskConical, Shield, Microscope,
  ChevronRight, Hexagon, Mail,
  Phone, MapPin, ArrowRight, X, CheckCircle2,
  Award, Clock, Snowflake, Truck, TestTube,
  ShoppingBag, Star, Plus, Beaker
} from 'lucide-react';
import { getFeaturedProducts, getNewProducts, getSaleProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const APP_VERSION = '1.02';

/* ─── HERO ─── */
function Hero() {
  const { lang } = useLanguage();
  const T = translations[lang].hero;
  const featured = getFeaturedProducts().slice(0, 3);

  const badgeColors: Record<string, string> = {
    popular: 'text-[#f59e0b]',
    new: 'text-[#34d399]',
    sale: 'text-[#f87171]',
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden [background:linear-gradient(135deg,#020e1c_0%,#031c35_45%,#042C53_100%)]">
      {/* Glow orbs */}
      <div className="absolute -top-32 right-[10%] w-[560px] h-[560px] bg-[#378ADD]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[3%] w-56 h-56 bg-[#60a5fa]/6 rounded-full blur-3xl pointer-events-none" />
      {/* Hex pattern */}
      <div className="absolute inset-0 hex-pattern opacity-[0.035]" />

      <div className="relative max-w-7xl mx-auto section-padding py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 bg-[#378ADD]/10 border border-[#378ADD]/25 px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#60a5fa] rounded-full animate-pulse" />
              <FlaskConical className="w-3.5 h-3.5 text-[#93c5fd]" />
              <span className="text-[#93c5fd] text-xs tracking-[0.2em] uppercase font-semibold">{T.badge}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black text-white leading-[1.02] mb-6">
              {T.title1}
              <br />
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                {T.title2}
              </span>
            </h1>

            <p className="text-base text-white/55 max-w-xl mb-4 leading-relaxed">
              {T.desc} <strong className="text-white/80">{T.skus}</strong>{T.skusSuffix}
            </p>

            <div className="inline-block bg-[#378ADD]/10 border border-[#378ADD]/20 px-3 py-1.5 rounded mb-10">
              <span className="text-[#60a5fa] text-xs font-semibold tracking-wide">{T.ruo}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#378ADD] text-white font-bold px-8 py-4 shadow-[0_6px_24px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.55)] hover:scale-[1.02] transition-all duration-300"
              >
                {T.cta1} <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border border-white/20 text-white/75 font-medium px-8 py-4 hover:bg-white/5 hover:border-white/35 transition-all duration-300 backdrop-blur-sm"
              >
                {T.cta2}
              </button>
            </div>
          </div>

          {/* Right: floating product preview cards */}
          <div className="hidden lg:flex flex-col gap-3 animate-fade-in">
            {featured.map((p, i) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className={`flex items-center gap-4 bg-white/${i === 0 ? '8' : '5'} border border-white/${i === 0 ? '12' : '7'} backdrop-blur-sm p-4 rounded-xl hover:bg-white/12 hover:border-[#378ADD]/35 transition-all duration-300 group`}
              >
                <div className="w-14 h-16 bg-white/6 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {p.image
                    ? <img src={p.image} alt={p.name} className="h-14 w-auto object-contain" />
                    : <Beaker className="w-6 h-6 text-white/30" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  {p.badge && (
                    <div className={`text-[10px] font-bold tracking-widest mb-0.5 ${badgeColors[p.badge] ?? 'text-white/60'}`}>
                      ● {p.badge.toUpperCase()}
                    </div>
                  )}
                  <div className="text-white font-bold text-sm truncate group-hover:text-[#93c5fd] transition-colors">{p.name}</div>
                  <div className="text-white/40 text-xs truncate">{p.specs}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-white font-black text-base">${p.price}</div>
                  {p.originalPrice && (
                    <div className="text-white/30 text-xs line-through">${p.originalPrice}</div>
                  )}
                </div>
              </Link>
            ))}
            <Link
              to="/catalog"
              className="flex items-center justify-center gap-2 bg-[#378ADD]/8 border border-[#378ADD]/18 p-3 rounded-xl text-[#93c5fd] text-sm font-semibold hover:bg-[#378ADD]/14 transition-all"
            >
              Ver todos los productos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.3em] uppercase">{T.scroll}</span>
        <div className="w-px h-8 bg-white/15 animate-pulse" />
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const { lang } = useLanguage();
  const T = translations[lang].trust;
  return (
    <section className="bg-[#0d3a6e] border-b border-[#185FA5]/30">
      <div className="max-w-7xl mx-auto section-padding py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#378ADD]/20">
          {T.stats.map((s, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-2xl md:text-3xl font-bold text-[#378ADD]">{s.num}</div>
              <div className="text-xs text-[#85B7EB]/70 mt-1 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURED PRODUCTS ─── */
function FeaturedProducts() {
  const { lang } = useLanguage();
  const T = translations[lang].products;
  const featured = getFeaturedProducts();
  const newProducts = getNewProducts();
  const saleProducts = getSaleProducts();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            {T.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            {T.title}
          </h2>
          <p className="text-[#5F5E5A] max-w-2xl mx-auto">{T.desc}</p>
        </div>

        {/* Popular */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#042C53] flex items-center gap-2">
              <Star className="w-5 h-5 text-[#378ADD]" />
              {T.mostPopular}
            </h3>
            <Link to="/catalog" className="text-sm text-[#378ADD] font-medium hover:text-[#185FA5] flex items-center gap-1">
              {T.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#042C53] flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#378ADD]" />
              {T.newArrivals}
            </h3>
            <Link to="/catalog?filter=new" className="text-sm text-[#378ADD] font-medium hover:text-[#185FA5] flex items-center gap-1">
              {T.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </div>

        {/* On Sale */}
        {saleProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-[#042C53] flex items-center gap-2">
                <Award className="w-5 h-5 text-red-600" />
                {T.onSale}
              </h3>
              <Link to="/catalog?filter=sale" className="text-sm text-[#378ADD] font-medium hover:text-[#185FA5] flex items-center gap-1">
                {T.viewAll} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleProducts.map((p) => (
                <ProductCard key={p.id} product={p} compact />
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link to="/catalog" className="btn-primary-bio inline-flex items-center gap-2">
            {T.browseAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── SCIENCE ─── */
function Science() {
  const { lang } = useLanguage();
  const T = translations[lang].science;
  return (
    <section id="science" className="py-24 bg-[#042C53] hex-pattern relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#185FA5]/10 to-transparent" />

      <div className="max-w-7xl mx-auto section-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#85B7EB] text-xs tracking-[0.3em] uppercase font-semibold">
              {T.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              {T.title1}
              <br />
              <span className="text-gradient">{T.title2}</span>
            </h2>
            <p className="text-[#85B7EB]/70 leading-relaxed mb-8">
              {T.desc}
              <strong className="text-white">{T.descBold}</strong>{T.descSuffix}
            </p>

            <div className="space-y-4">
              {T.benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#378ADD] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {T.milestones.map((m, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-2xl font-bold text-[#378ADD] mb-2">{m.num}</div>
                <div className="text-xs text-white/60 tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── QUALITY ─── */
function Quality() {
  const { lang } = useLanguage();
  const T = translations[lang].quality;
  const icons = [
    <Microscope className="w-8 h-8" />,
    <TestTube className="w-8 h-8" />,
    <Snowflake className="w-8 h-8" />,
    <Shield className="w-8 h-8" />,
    <Truck className="w-8 h-8" />,
    <Hexagon className="w-8 h-8" />,
  ];
  return (
    <section id="quality" className="py-24 bg-[#F8FAFD]">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            {T.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            {T.title}
          </h2>
          <p className="text-[#5F5E5A] max-w-2xl mx-auto">{T.desc}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {T.items.map((q, i) => (
            <div
              key={i}
              className="group p-8 border border-[#D4E5F5] hover:border-[#378ADD] hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#378ADD] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-[#EAF3FC] group-hover:bg-[#378ADD] text-[#378ADD] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                {icons[i]}
              </div>
              <h3 className="text-lg font-bold text-[#042C53] mb-2">{q.title}</h3>
              <p className="text-sm text-[#5F5E5A] leading-relaxed">{q.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const { lang } = useLanguage();
  const T = translations[lang].about;
  return (
    <section id="about" className="py-24 bg-[#F1EFE8]">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-[#042C53] p-12 hex-pattern">
                <img
                  src="/assets/biohacks_lockup_horizontal_negativo.svg"
                  alt="BIOHACKS PHARMACEUTICAL"
                  className="w-full max-w-md mx-auto"
                />
                <div className="mt-8 text-center">
                  <Hexagon className="w-16 h-16 text-[#378ADD] mx-auto mb-4" />
                  <p className="text-white/60 text-sm tracking-widest uppercase">
                    {T.caption}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#378ADD]/30 -z-10" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
              {T.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-6">
              {T.title1}
              <br />
              <span className="text-[#185FA5]">{T.title2}</span>
            </h2>
            <p className="text-[#5F5E5A] leading-relaxed mb-6">{T.desc1}</p>
            <p className="text-[#5F5E5A] leading-relaxed mb-8">{T.desc2}</p>

            <div className="grid grid-cols-3 gap-6">
              {T.stats.map((s, i) => (
                <div key={i} className="text-center p-4 bg-white border border-[#E6F1FB]">
                  <div className="text-2xl font-bold text-[#042C53]">{s.num}</div>
                  <div className="text-[10px] text-[#5F5E5A] tracking-wider uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();
  const T = translations[lang].faq;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            {T.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            {T.title}
          </h2>
          <p className="text-[#5F5E5A]">{T.desc}</p>
        </div>

        <div className="space-y-4">
          {T.items.map((faq, i) => (
            <div key={i} className="border border-[#E6F1FB] overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F1EFE8]/50 transition-colors"
              >
                <span className="font-bold text-[#042C53] text-sm pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <X className="w-5 h-5 text-[#378ADD] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#378ADD] flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-sm text-[#5F5E5A] leading-relaxed border-t border-[#E6F1FB] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  const { lang } = useLanguage();
  const T = translations[lang].cta;
  return (
    <section className="py-24 gradient-navy hex-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0.05\' fill=\'%23ffffff\'/%3E%3C/svg%3E')" />

      <div className="max-w-4xl mx-auto section-padding text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {T.title1}
          <br />
          <span className="text-gradient">{T.title2}</span>
        </h2>
        <p className="text-[#85B7EB]/80 text-lg max-w-2xl mx-auto mb-10">{T.desc}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/catalog" className="btn-primary-bio text-base px-10 py-4">
            {T.cta1}
          </Link>
          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-bio text-base px-10 py-4"
          >
            {T.cta2}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const { lang } = useLanguage();
  const T = translations[lang].contact;
  const contactIcons = [
    <Mail className="w-5 h-5" />,
    <Phone className="w-5 h-5" />,
    <MapPin className="w-5 h-5" />,
    <Clock className="w-5 h-5" />,
  ];
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            {T.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            {T.title}
          </h2>
          <p className="text-[#5F5E5A] max-w-2xl mx-auto">{T.desc}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[#F1EFE8] p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#042C53] mb-6">{T.formTitle}</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">{T.name}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors"
                    placeholder={T.name}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">{T.institution}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors"
                    placeholder={T.institution}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">{T.email}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors"
                  placeholder="research@institution.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">{T.productsLabel}</label>
                <select
                  aria-label={T.productsLabel}
                  className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors text-[#5F5E5A]"
                >
                  <option>{T.productsDefault}</option>
                  {T.products.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">{T.message}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors resize-none"
                  placeholder={T.messagePlaceholder}
                />
              </div>
              <button type="submit" className="btn-primary-bio w-full flex items-center justify-center gap-2">
                {T.submit} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#042C53] mb-6">{T.infoTitle}</h3>
              <div className="space-y-6">
                {T.info.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-[#E6F1FB] text-[#378ADD]">{contactIcons[i]}</div>
                    <div>
                      <div className="text-xs text-[#5F5E5A] tracking-wider uppercase mb-1">{c.label}</div>
                      <div className="text-[#042C53] font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#042C53] text-white">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-[#378ADD]" />
                <span className="font-semibold tracking-wide">{T.compliance}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{T.complianceText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <Science />
      <Quality />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <div className="fixed bottom-3 right-3 text-[#042C53]/20 text-[10px] select-none pointer-events-none">
        v{APP_VERSION}
      </div>
    </div>
  );
}
