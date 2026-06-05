import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy" subtitle="Policy">
      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">Introduction</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          At Nexora, we take your privacy seriously. This policy describes how we collect, use, and handle your personal information when you use our website and services. We are committed to ensuring that your personal data is protected and handled in compliance with global data protection standards, including GDPR and CCPA.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">Information We Collect</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          We collect information to provide better services to all our clients. The types of information we collect include:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 font-light">
          <li><strong>Direct Identification:</strong> Name, email address, and phone number when you fill out our contact forms.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP addresses, browser types, and pages visited.</li>
          <li><strong>Business Context:</strong> Company name and industry details provided during consulting inquiries.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">How We Use Your Data</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          The information we collect is used to:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 font-light">
          <li>Respond to your service inquiries and provide tailored consulting advice.</li>
          <li>Improve our website's technical performance and user experience.</li>
          <li>Communicate updates, industry insights, and relevant technical support.</li>
          <li>Comply with legal obligations and regulatory requirements.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-bcg-dark tracking-tight">Data Security</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          We implement advanced technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. Our systems are monitored 24/7 as part of our managed IT security practices.
        </p>
      </section>

      <section className="space-y-6 text-sm text-gray-400 pt-8 border-t border-gray-100">
        <p>Last updated: June 6, 2026</p>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
