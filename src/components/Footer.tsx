import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-bcg-gray pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 mb-16 sm:mb-24"
        >
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-light text-bcg-dark leading-tight mb-6 sm:mb-8">
              Unlocking the Potential of Those Who Advance the World
            </h2>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href="#" className="text-base sm:text-lg text-gray-700 hover:text-bcg-forest transition-colors">Careers</a>
              <a href="#" className="text-base sm:text-lg text-gray-700 hover:text-bcg-forest transition-colors">Alumni</a>
              <a href="#" className="text-base sm:text-lg text-gray-700 hover:text-bcg-forest transition-colors">Offices</a>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href="#" className="text-base sm:text-lg text-gray-700 hover:text-bcg-forest transition-colors">Subscribe</a>
              <a href="#" className="text-base sm:text-lg text-gray-700 hover:text-bcg-forest transition-colors">About</a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xl sm:text-2xl font-light text-bcg-dark mb-3 sm:mb-4">How can we assist you?</h3>
            <p className="text-sm text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We value the opportunity to connect with you. Please submit your inquiries and feedback, and our experienced professionals are ready to assist you.
            </p>
            <button className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-bcg-neon text-bcg-dark font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group">
              CONTACT US
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center lg:justify-start">
             <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-bcg-dark">NEXORA</span>
             <span className="text-[10px] text-gray-400 uppercase tracking-widest">NEXORA GROUP</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-bcg-forest transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-bcg-forest transition-colors">TERMS OF USE</a>
            <a href="#" className="hover:text-bcg-forest transition-colors">SITEMAP</a>
            <a href="#" className="hover:text-bcg-forest transition-colors">RESPONSIBLE DISCLOSURE</a>
            <a href="#" className="hover:text-bcg-forest transition-colors">COOKIE PREFERENCES</a>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
           <div className="max-w-4xl">
              <p className="text-[10px] text-gray-500 leading-relaxed mb-4">
                Nexora is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal, state, or local laws.
              </p>
           </div>
           <div className="text-[10px] text-gray-500 whitespace-nowrap shrink-0">
              © 2026 Nexora
           </div>
        </div>
      </div>
    </footer>
  );
};
