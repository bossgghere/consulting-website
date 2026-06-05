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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10 transition-colors duration-500">
      {/* Executive Tint Overlay */}
      <div className="absolute inset-0 bg-primary/[0.03] pointer-events-none" />
      
      {/* Accent Glow Rail (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center h-16 sm:h-20"
        >
          {/* Logo Section with Accent Rail */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Architectural Accent Rail */}
            <div className="w-[2px] sm:w-[3px] h-5 sm:h-6 bg-accent rounded-full hidden xs:block" />
            
            <Link to="/" className="group flex items-center">
              <span className="text-lg sm:text-2xl font-black tracking-tighter text-text-primary group-hover:text-primary transition-colors">
                NEXORA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (Unified) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="font-nav flex items-center gap-0.5 xl:gap-1 text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] text-text-primary">
              {NAV_LINKS.map(({ path, label }) => {
                const isActive = path === '/consulting-services' ? isConsultingActive : pathname === path;
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={`${
                      isActive 
                        ? 'text-primary bg-primary/5 shadow-[inset_0_0_0_1px_rgba(var(--theme-primary-rgb),0.1)]' 
                        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                    } px-4 xl:px-5 py-2 rounded-sm transition-all duration-300`}
                  >
                    {label}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Contact Section (Executive Action) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className={`hidden sm:block text-[11px] font-black uppercase tracking-[0.25em] px-6 py-3 border border-primary/10 rounded-sm transition-all duration-300 ${
                pathname === '/contact' 
                  ? 'bg-primary text-text-on-dark shadow-lg' 
                  : 'text-text-primary hover:bg-primary/5 hover:border-primary/20'
              }`}
            >
              Contact Us
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 text-text-primary hover:bg-primary/5 rounded-sm transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile dropdown (Themed) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-primary/5"
            >
              <div className="py-6 flex flex-col gap-2">
                {NAV_LINKS.map(({ path, label }, i) => {
                  const isActive = path === '/consulting-services' ? isConsultingActive : pathname === path;
                  return (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={path}
                        onClick={() => setMobileOpen(false)}
                        className={`block font-nav text-left px-4 py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] transition-all ${
                          isActive
                            ? 'bg-primary text-text-on-dark pl-6'
                            : 'text-text-primary hover:bg-primary/5 hover:pl-6'
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 block w-full text-center py-4 bg-accent text-text-primary font-black uppercase tracking-[0.2em] text-[10px] rounded-sm"
                >
                  Start a Conversation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
