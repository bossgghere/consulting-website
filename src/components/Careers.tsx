import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { PageId } from '../App';

interface CareersProps {
  onNavigate: (page: PageId) => void;
}

export const Careers = ({ onNavigate }: CareersProps) => {
  return (
    <section className="relative min-h-[400px] sm:h-[500px] md:h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Consulting background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl text-white">
          <span className="text-[10px] font-black uppercase tracking-widest mb-4 block opacity-80">CONSULTING</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">Bespoke consulting services</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90">
            We are far beyond another staffing organization. Try our highly approachable and result-oriented consulting service at your Best!
          </p>
          <button
            onClick={() => onNavigate('consulting')}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-bcg-neon text-bcg-dark font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group"
          >
            LEARN MORE ABOUT OUR SERVICES
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pr-12 xl:pr-20">
         <div className="bg-white p-2 sm:p-4 shadow-2xl rotate-3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Consultant"
              className="w-48 sm:w-64 h-60 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
         </div>
      </div>
    </section>
  );
};
