import React from 'react';
import LegalLayout from '../components/LegalLayout';

const CookiePolicy = () => {
  return (
    <LegalLayout title="Cookie" subtitle="Policy">
      <section className="space-y-6">
        <h2 className="text-3xl font-light text-text-primary tracking-tight">What are Cookies?</h2>
        <p className="text-text-secondary font-light leading-relaxed">
          Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-text-primary tracking-tight">How We Use Cookies</h2>
        <p className="text-text-secondary font-light leading-relaxed">
          Nexora uses cookies for several reasons:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-text-secondary font-light">
          <li><strong>Essential Cookies:</strong> These are necessary for the website to function correctly, such as maintaining security and accessibility.</li>
          <li><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization, such as remembering your region or language settings.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-light text-text-primary tracking-tight">Managing Your Preferences</h2>
        <p className="text-text-secondary font-light leading-relaxed">
          You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
        </p>
        <p className="text-text-secondary font-light leading-relaxed">
          You can also manage your consent through our on-site cookie banner which appears on your first visit.
        </p>
      </section>

      <section className="space-y-6 text-sm text-gray-400 pt-8 border-t border-border-subtle">
        <p>Last updated: June 6, 2026</p>
      </section>
    </LegalLayout>
  );
};

export default CookiePolicy;
