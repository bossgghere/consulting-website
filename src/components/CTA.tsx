import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8"
        >
          <div className="text-center md:text-left space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light text-text-on-dark leading-snug sm:leading-tight tracking-tight">
              How We <span className="text-accent italic font-serif">Work with Clients</span>
            </h2>
            <p className="home-prose-invert max-w-lg">
              Explore how we partner with leaders in business and society.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-text-primary font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
