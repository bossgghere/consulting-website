/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { About } from './components/About';
import { PressRelease } from './components/PressRelease';
import { Careers } from './components/Careers';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import StaffingSolutionsPage from './pages/StaffingSolutions';
import ConsultingServicesPage from './pages/ConsultingServices';
import TechServicesPage from './pages/TechServices';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';

const HomePage = () => (
  <>
    <Hero />
    <Insights />
    <About />
    <PressRelease />
    <Careers />
    <CTA />
  </>
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col min-w-0 overflow-x-clip">
      <Navbar />
      <main className="flex-grow min-w-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/staffing-solutions" element={<StaffingSolutionsPage />} />
          <Route path="/consulting-services" element={<ConsultingServicesPage />} />
          <Route path="/tech-services" element={<TechServicesPage />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          {/* Aliases for convenience if needed */}
          <Route path="/insights" element={<Navigate to="/" replace />} />
          <Route path="/careers" element={<Navigate to="/" replace />} />
          <Route path="/press" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
