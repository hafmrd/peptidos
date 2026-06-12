import { useState } from 'react';
import { Link } from 'react-router';
import {
  FlaskConical, Shield, TrendingUp, Microscope,
  ChevronRight, Hexagon, Mail,
  Phone, MapPin, ArrowRight, X, CheckCircle2,
  Package, Award, Clock, Snowflake, Truck, TestTube,
  ShoppingBag, Star, Plus
} from 'lucide-react';
import { getFeaturedProducts, getNewProducts, getSaleProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen gradient-navy hex-pattern flex items-center overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#378ADD]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#185FA5]/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto section-padding py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-[#378ADD]/20 border border-[#378ADD]/30 px-4 py-2 mb-8">
              <FlaskConical className="w-4 h-4 text-[#85B7EB]" />
              <span className="text-[#85B7EB] text-xs tracking-[0.2em] uppercase font-medium">
                Peptide Science Division
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision Peptide
              <br />
              <span className="text-gradient">Research Compounds</span>
            </h1>

            <p className="text-lg text-[#85B7EB]/80 max-w-xl mb-4 leading-relaxed">
              BIOHACKS PHARMACEUTICAL delivers pharmaceutical-grade peptides
              for research institutions, clinics, and biohacking professionals
              worldwide. <strong className="text-white">69+ SKUs</strong> with
              certified purity exceeding 99%.
            </p>

            <p className="text-sm text-[#378ADD] mb-10 font-medium tracking-wide">
              FOR RESEARCH USE ONLY — NOT FOR HUMAN CONSUMPTION
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="btn-primary-bio flex items-center gap-2">
                Shop Products <ChevronRight className="w-4 h-4" />
              </Link>
              <a href="#science" className="btn-outline-bio">
                Learn More
              </a>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, num: '$46B+', label: 'Global Peptide Market 2025' },
              { icon: <Shield className="w-6 h-6" />, num: '>99%', label: 'Certified Purity (HPLC)' },
              { icon: <Package className="w-6 h-6" />, num: '69+', label: 'Research SKUs Available' },
              { icon: <Award className="w-6 h-6" />, num: 'GLP-1', label: 'Leading Weight-Loss Class' },
            ].map((s, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-[#378ADD] mb-3">{s.icon}</div>
                <div className="text-3xl font-bold text-[#042C53] mb-1">{s.num}</div>
                <div className="text-xs text-[#5F5E5A] tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  return (
    <section className="bg-white border-b border-[#E6F1FB]">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '10.8%', label: 'Market CAGR 2026-2036' },
            { num: '110+', label: 'FDA-Approved Peptides' },
            { num: '23.3%', label: 'GLP-1 Market Growth' },
            { num: '40%', label: 'North America Share' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#042C53]">{s.num}</div>
              <div className="text-xs text-[#5F5E5A] mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURED PRODUCTS ─── */
function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const newProducts = getNewProducts();
  const saleProducts = getSaleProducts();

  return (
    <section id="products" className="py-24 bg-[#F1EFE8]">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            Product Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            Research Peptide Catalog
          </h2>
          <p className="text-[#5F5E5A] max-w-2xl mx-auto">
            69+ pharmaceutical-grade research peptides spanning metabolic health,
            regenerative medicine, cognitive enhancement, and anti-aging science.
          </p>
        </div>

        {/* Popular */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#042C53] flex items-center gap-2">
              <Star className="w-5 h-5 text-[#378ADD]" />
              Most Popular
            </h3>
            <Link to="/catalog" className="text-sm text-[#378ADD] font-medium hover:text-[#185FA5] flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
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
              New Arrivals
            </h3>
            <Link to="/catalog?filter=new" className="text-sm text-[#378ADD] font-medium hover:text-[#185FA5] flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
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
                On Sale
              </h3>
              <Link to="/catalog?filter=sale" className="text-sm text-[#378ADD] font-medium hover:text-[#185FA5] flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
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
            Browse Full Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── SCIENCE ─── */
function Science() {
  return (
    <section id="science" className="py-24 bg-[#042C53] hex-pattern relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#185FA5]/10 to-transparent" />

      <div className="max-w-7xl mx-auto section-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#85B7EB] text-xs tracking-[0.3em] uppercase font-semibold">
              The Science
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Why Peptides Are
              <br />
              <span className="text-gradient">Transforming Medicine</span>
            </h2>
            <p className="text-[#85B7EB]/70 leading-relaxed mb-8">
              Peptide therapeutics represent the fastest-growing segment in pharmaceuticals.
              With over 110 FDA-approved peptide drugs and a market projected to reach
              <strong className="text-white"> $144 billion by 2036</strong>, peptides offer
              unmatched specificity with minimal off-target effects.
            </p>

            <div className="space-y-4">
              {[
                'Superior target specificity vs. small molecules',
                'Lower toxicity and better safety profiles',
                'Natural amino acid building blocks',
                'Rapidly expanding therapeutic applications',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#378ADD] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '1980s', label: 'First synthetic peptide drugs' },
              { num: '2010s', label: 'GLP-1 revolution begins' },
              { num: '2023', label: 'Retatrutide 24% weight loss' },
              { num: '2025+', label: 'Triple agonist era dawns' },
            ].map((m, i) => (
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
  return (
    <section id="quality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            Quality Assurance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            Pharmaceutical-Grade Standards
          </h2>
          <p className="text-[#5F5E5A] max-w-2xl mx-auto">
            Every batch undergoes rigorous analytical testing to ensure the highest
            purity and consistency for your research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Microscope className="w-8 h-8" />,
              title: 'HPLC Verified',
              desc: 'High-Performance Liquid Chromatography analysis confirms >99% purity on every batch.',
            },
            {
              icon: <TestTube className="w-8 h-8" />,
              title: 'Mass Spectrometry',
              desc: 'LC-MS/MS identity confirmation ensures correct molecular weight and sequence.',
            },
            {
              icon: <Snowflake className="w-8 h-8" />,
              title: 'Cold Chain Integrity',
              desc: 'Lyophilized formulation with temperature-controlled shipping and storage protocols.',
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Batch Tracing',
              desc: 'Complete lot tracking from synthesis to delivery with Certificate of Analysis (CoA).',
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: 'Global Logistics',
              desc: 'Secure, discreet worldwide shipping with customs documentation and cold packaging.',
            },
            {
              icon: <Hexagon className="w-8 h-8" />,
              title: 'GMP Compliant',
              desc: 'Manufactured in GMP-compliant facilities following strict quality management systems.',
            },
          ].map((q, i) => (
            <div
              key={i}
              className="group p-8 border border-[#E6F1FB] hover:border-[#378ADD]/30 hover:shadow-lg transition-all duration-300 bg-[#F1EFE8]/50"
            >
              <div className="text-[#378ADD] mb-4 group-hover:scale-110 transition-transform">
                {q.icon}
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
                    Precision Bioactive Compounds
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#378ADD]/30 -z-10" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-6">
              Bridging Research
              <br />
              <span className="text-[#185FA5]">And Application</span>
            </h2>
            <p className="text-[#5F5E5A] leading-relaxed mb-6">
              BIOHACKS PHARMACEUTICAL operates at the intersection of cutting-edge
              biochemical research and practical therapeutic application. We partner
              with certified API manufacturers to deliver research-grade peptides
              that meet the exacting standards of clinics, universities, and
              research institutions worldwide.
            </p>
            <p className="text-[#5F5E5A] leading-relaxed mb-8">
              Our mission is to accelerate scientific discovery by making premium
              research compounds accessible to legitimate researchers exploring
              the frontiers of metabolic health, regenerative medicine, and
              human optimization.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '69+', label: 'SKUs' },
                { num: '>99%', label: 'Purity' },
                { num: '24h', label: 'Support' },
              ].map((s, i) => (
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

  const faqs = [
    {
      q: 'What are research-grade peptides?',
      a: 'Research-grade peptides are synthetic compounds used in laboratory settings for scientific study. They are not intended for human consumption, veterinary use, or any application outside controlled research environments. All our products are labeled "For Research Use Only."',
    },
    {
      q: 'How do I verify product purity?',
      a: 'Every batch comes with a Certificate of Analysis (CoA) from independent third-party laboratories. We use HPLC and Mass Spectrometry to verify >99% purity. CoAs are available upon request for any product in our catalog.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept major credit cards, PayPal, bank transfers, and cryptocurrency. All transactions are processed securely. For bulk orders (B2B), we also offer wire transfer and purchase order options.',
    },
    {
      q: 'How are orders shipped?',
      a: 'Orders ship in temperature-controlled packaging with cold packs to maintain peptide integrity. We offer standard and expedited shipping worldwide. Free shipping on orders over $250. All packages include tracking and discreet labeling.',
    },
    {
      q: 'Do you offer bulk or wholesale pricing?',
      a: 'Yes, we offer tiered pricing for bulk orders starting at 10+ vials per product. For institutional buyers, clinics, and distributors, please contact our B2B team for custom quotes and volume discounts.',
    },
    {
      q: 'How should I store peptides?',
      a: 'Lyophilized peptides should be stored at -20°C for maximum stability. Once reconstituted, store at 2-8°C and use within the timeframe specified in the product documentation. Always protect from light and moisture.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5F5E5A]">
            Common questions about our products, shipping, and research protocols.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#E6F1FB] overflow-hidden">
              <button
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
  return (
    <section className="py-24 gradient-navy hex-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0.05\' fill=\'%23ffffff\'/%3E%3C/svg%3E')" />

      <div className="max-w-4xl mx-auto section-padding text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Advance
          <br />
          <span className="text-gradient">Your Research?</span>
        </h2>
        <p className="text-[#85B7EB]/80 text-lg max-w-2xl mx-auto mb-10">
          Access our complete catalog of 69+ research peptides with full
          technical documentation, CoA certificates, and bulk pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/catalog" className="btn-primary-bio text-base px-10 py-4">
            Shop Now
          </Link>
          <a href="#contact" className="btn-outline-bio text-base px-10 py-4">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-[#378ADD] text-xs tracking-[0.3em] uppercase font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#042C53] mt-3 mb-4">
            Contact Our Team
          </h2>
          <p className="text-[#5F5E5A] max-w-2xl mx-auto">
            Whether you need bulk orders, custom formulations, or technical consultation,
            our team is ready to support your research needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[#F1EFE8] p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#042C53] mb-6">Send Inquiry</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">Institution</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors"
                    placeholder="Company or institution"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors"
                  placeholder="research@institution.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">Products of Interest</label>
                <select
                  className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors text-[#5F5E5A]"
                >
                  <option>Select product category</option>
                  <option>GLP-1 / Metabolic (Semaglutide, Tirzepatide, etc.)</option>
                  <option>Regenerative (BPC-157, TB-500)</option>
                  <option>Nootropic (Semax, Selank)</option>
                  <option>Hormonal (HGH, CJC-1295, Ipamorelin)</option>
                  <option>Aesthetic (GHK-Cu, NAD+)</option>
                  <option>Full Catalog</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm transition-colors resize-none"
                  placeholder="Tell us about your research needs..."
                />
              </div>
              <button type="submit" className="btn-primary-bio w-full flex items-center justify-center gap-2">
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#042C53] mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'research@biohackspharma.com' },
                  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+1 (555) 000-0000' },
                  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Global Distribution Network' },
                  { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: 'Mon-Fri, 9AM-6PM EST' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-[#E6F1FB] text-[#378ADD]">{c.icon}</div>
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
                <span className="font-semibold tracking-wide">Compliance Note</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                All products are sold strictly for research purposes only. Not for human consumption.
                Buyers must be 18+ and affiliated with a recognized research institution.
                Certificate of Analysis provided with every order.
              </p>
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
    </div>
  );
}
