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
    <div className="bg-white min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-bcg-dark mb-6 sm:mb-8 tracking-tight">
            On Demand Staffing Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
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
            <motion.h2 {...fadeUp()} className="text-2xl sm:text-3xl font-light text-bcg-dark mb-4 sm:mb-6">
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
                  <CheckCircle2 className="w-6 h-6 text-bcg-forest shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              {...fadeUp(0)}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Recruitment Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Professional Collaboration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Quote Section */}
      <section className="bg-gray-50 py-16 sm:py-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p {...fadeUp()} className="text-2xl sm:text-3xl font-light italic text-bcg-dark leading-relaxed">
            "Qualitative opportunities for qualified personnel. We care about the norms you set, 
            ensuring a perfect fit for your unique corporate culture."
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default StaffingSolutions;
