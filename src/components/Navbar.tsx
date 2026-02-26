import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageId } from '../App';

interface NavbarProps {
  onNavigate: (page: PageId, slug?: import('../data/consultingServices').ServiceSlug | null) => void;
  currentPage: PageId;
  serviceSlug?: string | null;
}

const NAV_LINKS: { page: PageId; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'consulting', label: 'Consulting' },
  { page: 'tech', label: 'Tech Services' },
  { page: 'about', label: 'About Us' },
];

export const Navbar = ({ onNavigate, currentPage, serviceSlug }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isConsultingActive = currentPage === 'consulting' || currentPage === 'service';

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfcfb]/95 backdrop-blur-sm py-3 sm:py-4 px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-start items-center gap-2 sm:gap-4"
        >
          {/* Logo - always goes to home */}
          <motion.div
            className="flex items-center justify-center bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-sm min-w-[120px] sm:min-w-[160px] cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="text-lg sm:text-2xl font-bold tracking-tighter text-bcg-dark">NEXORA</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-start bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-2 sm:py-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
              <button
                onClick={() => onNavigate('home')}
                className={`${currentPage === 'home' ? 'bg-[#D1FAE5] text-bcg-forest' : 'text-gray-600'} px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]`}
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('consulting')}
                className={`${isConsultingActive ? 'bg-[#D1FAE5] text-bcg-forest' : 'text-gray-600'} px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]`}
              >
                Consulting
              </button>
              <button
                onClick={() => onNavigate('tech')}
                className={`${currentPage === 'tech' ? 'bg-[#D1FAE5] text-bcg-forest' : 'text-gray-600'} px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]`}
              >
                Tech Services
              </button>
              <button
                onClick={() => onNavigate('about')}
                className={`${currentPage === 'about' ? 'bg-[#D1FAE5] text-bcg-forest' : 'text-gray-600'} px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]`}
              >
                About Us
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-gray-700"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Contact Section */}
          <div className="flex items-center justify-center bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-sm min-w-[100px] sm:min-w-[160px] ml-auto">
            <button
              onClick={() => onNavigate('contact')}
              className={`text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${currentPage === 'contact' ? 'text-bcg-forest' : 'text-bcg-dark hover:text-bcg-forest'}`}
            >
              CONTACT US
            </button>
          </div>
        </motion.div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-3 pb-2 flex flex-col gap-1 bg-white border border-gray-200 rounded-xl mt-2 shadow-lg px-4 py-3">
                {NAV_LINKS.map(({ page, label }, i) => (
                  <motion.button
                    key={page}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNav(page)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors active:scale-[0.98] ${
                      (page === 'consulting' ? isConsultingActive : currentPage === page)
                        ? 'bg-[#D1FAE5] text-bcg-forest'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
