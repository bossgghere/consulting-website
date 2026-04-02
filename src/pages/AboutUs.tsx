import React from 'react';
import { motion } from 'motion/react';

const AboutUs = () => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section - Editorial & Dramatic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 z-10 min-w-0"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-bcg-forest mb-6 sm:mb-8 block">WHO WE ARE</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light text-bcg-dark mb-8 sm:mb-12 tracking-tighter leading-[0.85] sm:leading-[0.8]">
              About <br /> <span className="italic font-serif">Us</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 leading-relaxed font-light max-w-xl">
              Nexora understands the customer's constraints about investing in IT and IT infra.
              We provide tailored services for all category of business demand.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="aspect-[3/4] rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="About Nexora"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-3 left-3 sm:-bottom-8 sm:-left-8 md:-bottom-12 md:-left-12 bg-bcg-neon p-6 sm:p-8 md:p-12 rounded-full shadow-2xl max-w-[min(100%-1.5rem,280px)] sm:max-w-none">
              <p className="text-bcg-dark font-black text-2xl sm:text-4xl tracking-tighter">Global</p>
              <p className="text-bcg-dark/60 text-[10px] uppercase tracking-widest font-bold">Presence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Clean & Minimal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-bcg-dark tracking-tight">Our <span className="italic font-serif">Values</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            { title: "Integrity", desc: "We build trust through transparent actions and honest communication in every partnership." },
            { title: "Innovation", desc: "Constantly pushing boundaries to find smarter, faster, and more efficient solutions." },
            { title: "Impact", desc: "Our success is measured by the tangible value we create for our clients' bottom line." }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-12 bg-white rounded-[2rem] sm:rounded-[3rem] border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-bcg-forest text-bcg-neon rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-bcg-dark mb-4 tracking-tight">{value.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantage Section - Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
                alt="Competitive Advantage"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-bcg-dark tracking-tight leading-tight">
              Your Competitive <br /> <span className="italic font-serif">Advantage</span>
            </h2>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
              <p>
                We have our own business entities established in nearly every country worldwide, 
                which means that the legwork required for you to hire and manage international talent 
                has already been done.
              </p>
              <p>
                We are your competitive advantage. When you need to get somewhere quickly, 
                our company is assisting you in growing yours. We do it promptly and efficiently 
                by drawing on our collective decades of experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unrivaled Combination Section - Dark & Immersive */}
      <section className="bg-bcg-dark text-white py-20 sm:py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,69,51,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
                Our people, expertise, and technology are all of the <span className="text-bcg-neon italic font-serif">highest calibers</span>, 
                but the combination is unrivaled.
              </h2>
              <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-lg">
                We are in a league of our own, backed by our global entities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
                alt="Expertise"
                className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
