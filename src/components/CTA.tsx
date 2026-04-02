import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { PageId } from '../App';

interface CTAProps {
  onNavigate: (page: PageId) => void;
}

export const CTA = ({ onNavigate }: CTAProps) => {
  return (
    <section className="bg-bcg-forest py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-2 sm:mb-3">How We Work with Clients</h2>
            <p className="home-prose-invert max-w-md">
              Explore how we partner with leaders in business and society.
            </p>
          </div>
          <motion.button
            type="button"
            onClick={() => onNavigate('about')}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-bcg-neon text-bcg-dark font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bcg-forest"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
