import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeLeft, fadeRight } from '../motionPresets';

export const PressRelease = () => {
  return (
    <section className="bg-background-alt py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div {...fadeLeft()} className="py-12 sm:py-20 pr-0 lg:pr-12 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-accent block">
                SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] font-light text-text-primary leading-snug sm:leading-tight tracking-tight">
                On Demand <span className="text-accent italic font-serif">Staffing Solutions</span>
              </h2>
              <p className="home-prose max-w-xl">
                Nexora provides professional, proficient, and reliable staffing services tailored to your unique
                corporate culture. We connect industry pioneers with potential workers and qualified subject matter
                experts.
              </p>
            </div>
            <div>
              <Link
                to="/staffing-solutions"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-text-primary font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group"
              >
                READ MORE
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...fadeRight()}
            className="relative bg-surface flex items-center justify-center p-8 sm:p-12"
          >
             <motion.div
                className="w-full max-w-md"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                 <img
                   src="/images/shared/team-collaboration.webp"
                   alt="Staffing Solutions"
                   className="w-full h-auto rounded-lg shadow-lg"
                   referrerPolicy="no-referrer"
                 />
                 <div className="mt-6 sm:mt-8 text-center">
                    <p className="home-prose text-center text-primary/90 tracking-tight">
                      Qualitative opportunities for qualified personnel
                    </p>
                 </div>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
