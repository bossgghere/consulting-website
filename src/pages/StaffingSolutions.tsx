import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp } from '../motionPresets';

const StaffingSolutions = () => {
  const features = [
    "Professional team of industry-based recruiting representatives having vast knowledge and experiences.",
    "We aim to give our clients professional, proficient, and reliable staffing services.",
    "Better quality results by building real associations between our applicants and our clients, assisting further to serve better for the unique requisites.",
    "We also look forward on how to associate industry pioneers or entrepreneurs with potential workers and qualified subject matter experts.",
    "We care about the norms you set, whether it be for experience, accessibility, or unique corporate culture.",
    "We can flexibly comprehend the real worth regarding a delved workforce who can bring enhancement to any business or association."
  ];

  return (
    <div className="bg-background min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-text-primary mb-6 sm:mb-8 tracking-tight">
            On Demand Staffing Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
            We know how to make a way for every candidate to track down astonishing and engaging
            as well as valuable work opportunities. Whether it is temporary to permanent,
            short-term personnel for direct work, our methodology remains the same—Qualitative
            opportunities for qualified personnel.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <motion.h2 {...fadeUp()} className="text-2xl sm:text-3xl font-light text-text-primary mb-4 sm:mb-6">
              At Nexora we offer—
            </motion.h2>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 items-start group"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              {...fadeUp(0)}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-700"
            >
              <img
                src="/images/shared/team-meeting.webp"
                alt="Recruitment Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-700"
            >
              <img
                src="/images/shared/team-collaboration.webp"
                alt="Professional Collaboration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Quote Section */}
      <section className="bg-surface-alt py-20 sm:py-32 border-y border-border-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--theme-primary-hover),transparent)] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-light italic text-text-primary leading-tight mb-8">
              "We provide qualitative opportunities for qualified personnel—bridging the gap between 
              ambition and industry excellence."
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-px bg-primary" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">Nexora Leadership</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaffingSolutions;
