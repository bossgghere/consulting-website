import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { PageId } from '../App';

interface PressReleaseProps {
  onNavigate: (page: PageId) => void;
}

export const PressRelease = ({ onNavigate }: PressReleaseProps) => {
  return (
    <section className="bg-[#fdfcfb] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-12 sm:py-20 pr-0 lg:pr-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">SOLUTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-light text-bcg-dark mb-5 sm:mb-6 leading-tight">
              On Demand Staffing Solutions
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600 mb-6 sm:mb-8 max-w-xl">
              Nexora provides professional, proficient, and reliable staffing services tailored to your unique
              corporate culture. We connect industry pioneers with potential workers and qualified subject matter
              experts.
            </p>
            <button
              onClick={() => onNavigate('staffing')}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-bcg-neon text-bcg-dark font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:brightness-110 transition-all group"
            >
              READ MORE
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative bg-white flex items-center justify-center p-8 sm:p-12">
             <div className="w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Staffing Solutions"
                  className="w-full h-auto rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-6 sm:mt-8 text-center">
                   <p className="home-prose text-center text-bcg-forest/90 tracking-tight">
                     Qualitative opportunities for qualified personnel
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
