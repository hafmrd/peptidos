import { Link } from 'react-router';
import { FlaskConical } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const T = translations[lang].footer;

  return (
    <footer className="bg-[#042C53] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/biohacks_isotipo_color.svg" alt="" className="h-8 w-8" />
              <div>
                <div className="font-bold tracking-[0.15em] text-sm">BIOHACKS</div>
                <div className="text-[10px] text-[#85B7EB] tracking-[0.25em]">PHARMACEUTICAL</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{T.tagline}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#85B7EB] mb-4">{T.products}</h4>
            <ul className="space-y-2">
              {T.productLinks.map((l: string) => (
                <li key={l}>
                  <Link to="/catalog" className="text-white/50 hover:text-white text-sm transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#85B7EB] mb-4">{T.resources}</h4>
            <ul className="space-y-2">
              {T.resourceLinks.map((l: string) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#85B7EB] mb-4">{T.legal}</h4>
            <ul className="space-y-2">
              {T.legalLinks.map((l: string) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">{T.copyright}</p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <FlaskConical className="w-3 h-3" />
            <span>{T.division}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
