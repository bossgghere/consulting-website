import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem } from '../motionPresets';

export const About = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--theme-accent-subtle),transparent)] opacity-60 pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                variants={staggerItem}
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-accent block"
              >
                About Nexora
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-light text-text-on-dark leading-snug sm:leading-tight tracking-tight"
              >
                As a top consulting firm, we help clients with{' '}
                <span className="text-accent italic font-serif">total transformation</span>
              </motion.h2>
            </div>
            
            <motion.p variants={staggerItem} className="home-prose-invert max-w-lg lg:max-w-xl">
              Driving complex change, enabling organizations to grow, and delivering bottom-line impact.
              We are in a league of our own, backed by our global entities—strategy, delivery, and outcomes aligned with how you operate.
            </motion.p>
            
            <motion.div variants={staggerItem}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-primary font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group"
              >
                LEARN MORE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
            className="relative"
          >
            <img
              src="/images/shared/team-meeting.webp"
              alt="Nexora Strategic Team"
              className="w-full h-full object-cover rounded-sm shadow-xl max-h-[400px] lg:max-h-none lg:aspect-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
