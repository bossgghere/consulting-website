import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const FeatureItem = ({ text }: { text: string; key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-3 group"
  >
    <CheckCircle2 className="w-5 h-5 text-bcg-forest shrink-0 mt-1 group-hover:scale-110 transition-transform" />
    <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600">{text}</p>
  </motion.div>
);

const TechServicesPage = () => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24">
      {/* Hero Section - Bold & Immersive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-bcg-forest mb-6 sm:mb-8 block">TECHNICAL EXCELLENCE</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-bcg-dark mb-8 sm:mb-12 tracking-tighter leading-[0.85] sm:leading-[0.8]">
              Tech <br /> <span className="italic font-serif">Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-md">
              Empowering your business with cutting-edge technology solutions, from rigorous 
              quality assurance to comprehensive managed IT support.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-0 sm:min-h-[28rem] lg:min-h-0 pb-6 sm:pb-8 lg:pb-0"
          >
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:pl-4 xl:pl-8 pb-4 sm:pb-0">
              {/* Primary — engineering / collaboration */}
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80"
                  alt="Engineers collaborating on technology solutions"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Secondary — data & infrastructure accent (stacked on mobile, overlap on sm+) */}
              <div className="mt-4 w-[72%] max-w-[240px] ml-auto sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-2 sm:ml-0 md:-right-4 lg:right-0 sm:w-[45%] sm:max-w-[220px] aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#fdfcfb] z-10">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt="Server infrastructure and operations"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Floating Elements — inset on small screens to avoid horizontal overflow */}
            <div className="absolute top-2 right-2 sm:-top-10 sm:-right-6 lg:-top-12 lg:-right-12 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-bcg-neon rounded-full flex items-center justify-center p-4 sm:p-6 text-center shadow-xl animate-bounce-slow z-20">
              <p className="text-bcg-dark font-black text-[9px] sm:text-[10px] uppercase tracking-widest px-1">Innovation Driven</p>
            </div>
            <div className="absolute bottom-6 left-3 sm:bottom-12 sm:left-4 md:-left-8 lg:-left-12 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 z-20 hidden sm:block">
              <p className="text-bcg-forest font-black text-2xl sm:text-3xl tracking-tighter">99.9%</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Uptime Guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Software Testing Section - Dark Split Layout */}
      <section className="bg-bcg-dark text-white py-16 sm:py-24 lg:py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="min-w-0"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-neon mb-6 block">QUALITY ASSURANCE</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 tracking-tight">Software <span className="italic font-serif">Testing</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-12 font-light">
                We offer the total scope of Quality software testing for an expansive cluster of client needs — 
                across custom, computerized, bundled and evolving tech applications.
              </p>
              <div className="grid grid-cols-1 gap-8">
                {[
                  "Specialized Testing for smart technologies",
                  "Application QA fueling velocity & quality",
                  "Mechanized, AI-based analytics approach",
                  "Insight-driven quality transformation"
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-32px' }}
                    transition={{ duration: 0.42, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full border border-bcg-neon flex items-center justify-center group-hover:bg-bcg-neon transition-colors shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-bcg-neon group-hover:text-bcg-dark transition-colors" />
                    </div>
                    <span className="text-base sm:text-lg font-light text-gray-300 group-hover:text-white transition-colors min-w-0">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/5">
                <img 
                  src="https://picsum.photos/seed/software-quality-assurance-code/800/800" 
                  alt="Quality Assurance" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Support Section - Clean Split Layout */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative min-w-0"
            >
              <div className="aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://picsum.photos/seed/managed-it-infrastructure/1200/800" 
                  alt="IT Support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-2 left-2 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-bcg-forest rounded-full flex items-center justify-center text-bcg-neon font-black text-[10px] sm:text-xs uppercase tracking-widest p-3 sm:p-4 text-center">
                24/7 Support
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 min-w-0"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-forest mb-6 block">MANAGED SERVICES</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-bcg-dark mb-6 sm:mb-8 tracking-tight">IT <span className="italic font-serif">Support</span></h2>
              <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600 mb-12 max-w-xl">
                We handle all security and IT monitoring for you. access quality technical support rapidly. We keep
                up with definite documentation and analysis of your frameworks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Server & organization support",
                  "Managed IT Services",
                  "Individual User Support",
                  "Customized business IT Solutions",
                  "Security & Back-up"
                ].map((text, i) => (
                  <FeatureItem key={i} text={text} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechServicesPage;
