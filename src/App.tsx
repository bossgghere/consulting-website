/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { About } from './components/About';
import { PressRelease } from './components/PressRelease';
import { Careers } from './components/Careers';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import StaffingSolutionsPage from './pages/StaffingSolutions';
import ConsultingServicesPage from './pages/ConsultingServices';
import TechServicesPage from './pages/TechServices';
import ServiceDetail from './pages/ServiceDetail';
import type { ServiceSlug } from './data/consultingServices';

export type PageId = 'home' | 'about' | 'contact' | 'staffing' | 'consulting' | 'tech' | 'service';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [serviceSlug, setServiceSlug] = useState<ServiceSlug | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, serviceSlug]);

  const handleNavigate = (page: PageId, slug?: ServiceSlug | null) => {
    setCurrentPage(page);
    setServiceSlug(slug ?? null);
  };

  const handleNavigateToService = (slug: ServiceSlug) => {
    handleNavigate('service', slug);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        serviceSlug={serviceSlug}
      />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Insights />
            <About onNavigate={handleNavigate} />
            <PressRelease onNavigate={handleNavigate} />
            <Careers onNavigate={handleNavigate} />
            <CTA />
          </>
        ) : currentPage === 'about' ? (
          <AboutUsPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : currentPage === 'staffing' ? (
          <StaffingSolutionsPage />
        ) : currentPage === 'consulting' ? (
          <ConsultingServicesPage onNavigateToService={handleNavigateToService} />
        ) : currentPage === 'service' && serviceSlug ? (
          <ServiceDetail
            slug={serviceSlug}
            onBack={() => handleNavigate('consulting')}
          />
        ) : (
          <TechServicesPage />
        )}
      </main>
      <Footer />
    </div>
  );
}
