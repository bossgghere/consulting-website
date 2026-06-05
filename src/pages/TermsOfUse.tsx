import React from 'react';
import LegalLayout from '../components/LegalLayout';

const TermsOfUse = () => {
  return (
    <LegalLayout title="Terms" subtitle="of Use">
      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">1. Acceptance of Terms</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          By accessing or using Nexora's website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">2. Use License</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          Permission is granted to temporarily download one copy of the materials (information or software) on Nexora's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 font-light">
          <li>Modify or copy the materials.</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
          <li>Attempt to decompile or reverse engineer any software contained on Nexora's website.</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">3. Disclaimer</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          The materials on Nexora's website are provided on an 'as is' basis. Nexora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">4. Limitations</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          In no event shall Nexora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Nexora's website, even if Nexora or a Nexora authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section className="space-y-6 text-sm text-gray-400 pt-8 border-t border-gray-100">
        <p>Last updated: June 6, 2026</p>
      </section>
    </LegalLayout>
  );
};

export default TermsOfUse;
