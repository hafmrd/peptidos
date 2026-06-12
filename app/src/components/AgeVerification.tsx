import { useState } from 'react';
import { Shield, CheckCircle2, XCircle } from 'lucide-react';

export default function AgeVerification() {
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
          <h2 className="text-2xl font-bold text-[#042C53]">Age Verification Required</h2>
        </div>

        <div className="space-y-4 text-[#5F5E5A] text-sm leading-relaxed mb-8">
          <p>
            <strong className="text-[#042C53]">Research Use Only Disclaimer:</strong> All products sold by BIOHACKS PHARMACEUTICAL are intended <strong>strictly for laboratory research and scientific study purposes only</strong>. These products are <strong>NOT</strong> intended for human consumption, veterinary use, or any other use outside of controlled laboratory settings.
          </p>
          <p>
            The peptides and research compounds available on this website <strong>have not been evaluated or approved by the U.S. Food & Drug Administration (FDA)</strong> for human use, diagnosis, treatment, cure, or prevention of any disease or medical condition.
          </p>
          <p>
            You must be <strong className="text-[#042C53]">21 years of age or older</strong> to access this website and purchase any products. By entering you agree that all products will be used for lawful laboratory/research purposes only.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => handleVerify(true)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#378ADD] text-white font-semibold hover:bg-[#185FA5] transition-colors"
          >
            <CheckCircle2 className="w-5 h-5" />
            I am 21+ — Enter Site
          </button>
          <button
            type="button"
            onClick={() => handleVerify(false)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#5F5E5A] text-[#5F5E5A] font-semibold hover:bg-[#5F5E5A] hover:text-white transition-colors"
          >
            <XCircle className="w-5 h-5" />
            I am under 21 — Exit
          </button>
        </div>

        <p className="mt-6 text-xs text-[#5F5E5A] text-center">
          By entering you agree to our full Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
