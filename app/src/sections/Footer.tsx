import { Link } from 'react-router';
import { FlaskConical } from 'lucide-react';

export default function Footer() {
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
            <p className="text-white/50 text-sm leading-relaxed">
              Precision bioactive compounds for research institutions and clinical applications worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#85B7EB] mb-4">Products</h4>
            <ul className="space-y-2">
              {['GLP-1 Agonists', 'Regenerative Peptides', 'Nootropics', 'Hormonal', 'Aesthetic', 'Blends', 'Supplies'].map((l) => (
                <li key={l}>
                  <Link to="/catalog" className="text-white/50 hover:text-white text-sm transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#85B7EB] mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Technical Data Sheets', 'Certificate of Analysis', 'Storage Guidelines', 'Research Protocols', 'FAQ'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#85B7EB] mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Research Use Policy', 'Shipping Terms', 'Returns'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2025 BIOHACKS PHARMACEUTICAL. All rights reserved. For Research Use Only.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <FlaskConical className="w-3 h-3" />
            <span>Peptide Science Division</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
