import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../motionPresets';

export const Hero = () => {
  return (
    <section className="bg-[#fdfcfb] pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-bcg-dark mb-6 sm:mb-10 tracking-tight"
          >
            Nexora
          </motion.h1>
        <motion.div
          variants={staggerItem}
          className="relative w-full aspect-[5/3] sm:aspect-[2/1] lg:aspect-[21/9] min-h-[180px] sm:min-h-0 overflow-hidden rounded-lg sm:rounded-sm shadow-2xl group"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern workspace"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
