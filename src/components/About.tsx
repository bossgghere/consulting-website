import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { PageId } from '../App';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About = ({ onNavigate }: AboutProps) => {
  return (
    <section className="relative py-12 sm:py-20 bg-bcg-forest overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,75,0.12),transparent)] pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-bcg-neon block">
              About Nexora
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] font-light text-white leading-snug sm:leading-tight tracking-tight">
              As a top consulting firm, we help clients with{' '}
              <span className="text-bcg-neon italic font-serif">total transformation</span>
              —driving complex change, enabling organizations to grow, and delivering bottom-line impact.
            </h2>
            <p className="home-prose-invert max-w-lg">
              We are in a league of our own, backed by our global entities—strategy, delivery, and outcomes aligned with how you operate.
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
