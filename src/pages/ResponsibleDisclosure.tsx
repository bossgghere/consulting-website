import React from 'react';
import LegalLayout from '../components/LegalLayout';

const ResponsibleDisclosure = () => {
  return (
    <LegalLayout title="Responsible" subtitle="Disclosure">
      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">Vulnerability Reporting</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          At Nexora, the security of our systems and our clients' data is our highest priority. We appreciate the work of security researchers and the community in helping us maintain a secure environment. If you believe you have found a security vulnerability on our site or services, we encourage you to report it to us in a responsible manner.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">Guidelines</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          To ensure a productive and safe reporting process, we ask that you:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 font-light">
          <li>Provide a detailed description of the vulnerability, including steps to reproduce it.</li>
          <li>Avoid any actions that could impact the availability of our services (e.g., DoS attacks).</li>
          <li>Do not attempt to access, modify, or delete any data that does not belong to you.</li>
          <li>Give us a reasonable amount of time to investigate and remediate the issue before making any information public.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">Our Commitment</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          If you follow these guidelines, we commit to:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 font-light">
          <li>Acknowledging your report in a timely manner.</li>
          <li>Working with you to understand and resolve the issue.</li>
          <li>Not taking legal action against you for your discovery and reporting.</li>
          <li>Publicly acknowledging your contribution if you desire, once the issue is resolved.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">How to Report</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          Please send your findings to <a href="mailto:security@nexora.com" className="text-bcg-forest font-bold hover:underline">security@nexora.com</a>. We recommend using PGP encryption for sensitive details.
        </p>
      </section>

      <section className="space-y-6 text-sm text-gray-400 pt-8 border-t border-gray-100">
        <p>Last updated: June 6, 2026</p>
      </section>
    </LegalLayout>
  );
};

export default ResponsibleDisclosure;
