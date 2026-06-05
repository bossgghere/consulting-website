import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/consulting-services', label: 'Consulting' },
  { path: '/tech-services', label: 'Tech Services' },
  { path: '/about', label: 'About Us' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isConsultingActive = pathname === '/consulting-services' || pathname.startsWith('/service/');

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm py-3 sm:py-4 px-2 sm:px-0 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-start items-center gap-2 sm:gap-4 min-w-0 w-full"
        >
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center justify-center bg-surface border border-border-subtle rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-sm min-w-[120px] sm:min-w-[160px] cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="text-lg sm:text-2xl font-bold tracking-tighter text-text-primary">NEXORA</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-start bg-surface border border-border-subtle rounded-xl sm:rounded-2xl px-6 sm:px-8 py-2 sm:py-3 shadow-sm">
            <div className="font-nav flex flex-wrap items-center gap-3 sm:gap-6 text-sm font-semibold uppercase tracking-widest text-text-primary">
              {NAV_LINKS.map(({ path, label }) => {
                const isActive = path === '/consulting-services' ? isConsultingActive : pathname === path;
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={`${isActive ? 'bg-nav-active text-primary' : 'text-text-primary hover:text-primary'} px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 active:scale-[0.98]`}
                  >
                    {label}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex items-center justify-center bg-surface border border-border-subtle rounded-xl px-4 py-2.5 shadow-sm text-text-secondary"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Contact Section */}
          <div className="flex items-center justify-center bg-surface border border-border-subtle rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-sm min-w-[100px] sm:min-w-[160px] ml-auto">
            <Link
              to="/contact"
              className={`text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${pathname === '/contact' ? 'text-primary' : 'text-text-primary hover:text-primary'}`}
            >
              CONTACT US
            </Link>
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
              <div className="pt-3 pb-2 flex flex-col gap-1 bg-surface border border-border-subtle rounded-xl mt-2 shadow-lg px-4 py-3">
                {NAV_LINKS.map(({ path, label }, i) => {
                  const isActive = path === '/consulting-services' ? isConsultingActive : pathname === path;
                  return (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={path}
                        onClick={() => setMobileOpen(false)}
                        className={`block font-nav text-left px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest transition-colors active:scale-[0.98] ${
                          isActive
                            ? 'bg-nav-active text-primary'
                            : 'text-text-primary hover:bg-background-alt hover:text-primary'
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
