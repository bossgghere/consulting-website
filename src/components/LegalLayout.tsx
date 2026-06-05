import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../motionPresets';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, subtitle, children }: LegalLayoutProps) => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-black uppercase tracking-[0.4em] text-bcg-forest mb-6 block"
          >
            LEGAL & COMPLIANCE
          </motion.span>
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-6xl md:text-7xl font-light text-bcg-dark mb-6 sm:mb-8 tracking-tighter leading-tight"
          >
            {title} <br /> <span className="italic font-serif">{subtitle}</span>
          </motion.h1>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none space-y-12"
            >
              {children}
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-32 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm"
            >
              <h4 className="text-xs font-black uppercase tracking-widest text-bcg-dark mb-6">Need Assistance?</h4>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-light">
                If you have questions regarding our legal terms or data protection practices, please contact our compliance team.
              </p>
              <a 
                href="mailto:legal@nexora.com" 
                className="block w-full py-3 bg-bcg-dark text-white text-center text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-bcg-forest transition-colors"
              >
                Contact Legal
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalLayout;
