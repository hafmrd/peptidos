import { useState } from 'react';
import { Shield, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function AgeVerification() {
  const { lang } = useLanguage();
  const T = translations[lang].age;

  const [show, setShow] = useState(
    () => localStorage.getItem('biohacks_age_verified') !== 'true'
  );

  if (!show) return null;

  const handleVerify = (ofAge: boolean) => {
    if (ofAge) {
      localStorage.setItem('biohacks_age_verified', 'true');
      setShow(false);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#042C53]/95 backdrop-blur-sm p-4">
      <div className="bg-white max-w-lg w-full p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-[#378ADD]" />
          <h2 className="text-2xl font-bold text-[#042C53]">{T.title}</h2>
        </div>

        <div className="space-y-4 text-[#042C53] text-sm leading-relaxed mb-8">
          <p>
            <strong className="text-[#042C53]">{T.label1}</strong>{' '}
            {T.body1}
          </p>
          <p>{T.body2}</p>
          <p>{T.body3}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => handleVerify(true)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#378ADD] text-white font-semibold hover:bg-[#185FA5] transition-colors"
          >
            <CheckCircle2 className="w-5 h-5" />
            {T.enter}
          </button>
          <button
            type="button"
            onClick={() => handleVerify(false)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#042C53] text-[#042C53] font-semibold hover:bg-[#042C53] hover:text-white transition-colors"
          >
            <XCircle className="w-5 h-5" />
            {T.exit}
          </button>
        </div>

        <p className="mt-6 text-xs text-[#5F5E5A] text-center">
          {T.footnote}
        </p>
      </div>
    </div>
  );
}
