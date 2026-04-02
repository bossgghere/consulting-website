import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainer, staggerItem } from '../motionPresets';
import { Cookie, X, Check, Settings } from 'lucide-react';

const STORAGE_KEY = 'kabir-cookie-consent';

type ConsentStatus = 'pending' | 'accepted' | 'essential' | null;

export const CookieConsent = () => {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus | null;
      if (stored === 'accepted' || stored === 'essential') setStatus(stored);
      else setStatus('pending');
    } catch {
      setStatus('pending');
    }
  }, []);

  const save = (value: 'accepted' | 'essential') => {
    setStatus(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setPanelOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating cookie icon - fixed bottom right */}
      <motion.button
        type="button"
        aria-label="Cookie preferences"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        onClick={() => setPanelOpen((o) => !o)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-bcg-forest text-bcg-neon shadow-lg border-2 border-bcg-neon/30 flex items-center justify-center hover:scale-110 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bcg-forest transition-all duration-200"
      >
        <Cookie className="w-7 h-7" />
        {status === 'pending' && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-bcg-neon animate-pulse" />
        )}
      </motion.button>

      {/* Cookie panel */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
              className="fixed inset-0 z-[99] bg-black/20 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, x: 24, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-20 left-4 right-4 z-[100] w-auto max-w-md mx-auto sm:left-auto sm:right-6 sm:mx-0 sm:bottom-24 rounded-2xl bg-bcg-forest text-white shadow-2xl border border-bcg-neon/20 overflow-hidden"
            >
              <motion.div
                className="p-6 sm:p-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <motion.div variants={staggerItem} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-bcg-neon/20 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-bcg-neon" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">Cookie preferences</h3>
                  </motion.div>
                  <button
                    type="button"
                    onClick={() => setPanelOpen(false)}
                    aria-label="Close"
                    className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <motion.p variants={staggerItem} className="text-sm text-white/85 leading-relaxed mb-6">
                  We use cookies to improve your experience, remember your preferences, and analyze site traffic. 
                  You can accept all cookies or only essential ones.
                </motion.p>
                <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
                  <motion.button
                    type="button"
                    onClick={() => save('accepted')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-bcg-neon text-bcg-dark font-bold uppercase tracking-widest text-xs rounded-full hover:brightness-110 transition-all"
                  >
                    <Check className="w-4 h-4" /> Accept all
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => save('essential')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-full border border-white/30 hover:bg-white/20 transition-all"
                  >
                    <Settings className="w-4 h-4" /> Essential only
                  </motion.button>
                </motion.div>
                <motion.p variants={staggerItem} className="text-[10px] text-white/60 mt-4">
                  See our{' '}
                  <a href="#" className="underline hover:text-bcg-neon transition-colors">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="underline hover:text-bcg-neon transition-colors">Cookie Policy</a>.
                </motion.p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
