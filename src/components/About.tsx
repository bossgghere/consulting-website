import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { PageId } from '../App';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About = ({ onNavigate }: AboutProps) => {
  return (
    <section className="py-12 sm:py-20 bg-bcg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 sm:mb-8">About Nexora</h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-xl">
              As a top consulting firm, Nexora helps clients with total transformation—driving complex change, enabling organizations to grow, and driving bottom-line impact.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-bcg-neon text-bcg-dark font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Nexora"
              className="w-full h-full object-cover rounded-sm shadow-xl max-h-[400px] lg:max-h-none lg:aspect-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
