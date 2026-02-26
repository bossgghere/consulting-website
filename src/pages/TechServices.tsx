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
    <p className="text-gray-700 leading-relaxed">{text}</p>
  </motion.div>
);

const TechServicesPage = () => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-24">
      {/* Hero Section - Bold & Immersive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-bcg-forest mb-8 block">TECHNICAL EXCELLENCE</span>
            <h1 className="text-8xl md:text-[10rem] font-light text-bcg-dark mb-12 tracking-tighter leading-[0.8]">
              Tech <br /> <span className="italic font-serif">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-md">
              Empowering your business with cutting-edge technology solutions, from rigorous 
              quality assurance to comprehensive managed IT support.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://picsum.photos/seed/high-tech-digital-transformation/800/1000" 
                alt="Tech Excellence" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-bcg-neon rounded-full flex items-center justify-center p-6 text-center shadow-xl animate-bounce-slow">
              <p className="text-bcg-dark font-black text-[10px] uppercase tracking-widest">Innovation Driven</p>
            </div>
            <div className="absolute bottom-12 -left-12 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <p className="text-bcg-forest font-black text-3xl tracking-tighter">99.9%</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Uptime Guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Software Testing Section - Dark Split Layout */}
      <section className="bg-bcg-dark text-white py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-neon mb-6 block">QUALITY ASSURANCE</span>
              <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">Software <span className="italic font-serif">Testing</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12 font-light">
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
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-bcg-neon flex items-center justify-center group-hover:bg-bcg-neon transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-bcg-neon group-hover:text-bcg-dark transition-colors" />
                    </div>
                    <span className="text-lg font-light text-gray-300 group-hover:text-white transition-colors">{text}</span>
                  </div>
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
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://picsum.photos/seed/managed-it-infrastructure/1200/800" 
                  alt="IT Support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-bcg-forest rounded-full flex items-center justify-center text-bcg-neon font-black text-xs uppercase tracking-widest p-4 text-center">
                24/7 Support
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-forest mb-6 block">MANAGED SERVICES</span>
              <h2 className="text-5xl md:text-7xl font-light text-bcg-dark mb-8 tracking-tight">IT <span className="italic font-serif">Support</span></h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                We handle all security and IT monitoring for you. access quality technical support rapidly. 
                We keep up with definite documentation and analysis of your frameworks.
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
