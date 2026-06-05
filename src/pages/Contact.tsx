import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '../motionPresets';

const ContactPage = () => {
  return (
    <div className="bg-background-alt min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mb-16 sm:mb-24"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 sm:mb-8 block"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-text-primary mb-8 sm:mb-12 tracking-tighter leading-[0.85] sm:leading-[0.8]"
          >
            Contact <br /> <span className="italic font-serif">Us</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl"
          >
            Have a question or want to discuss a project? Reach out to our global team of experts.
            We're here to help you navigate your most complex challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Contact Form - Clean Utility Style */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-surface p-5 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-[3rem] shadow-2xl border border-border-subtle min-w-0"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-background-alt border-b-2 border-border-subtle rounded-none px-0 py-4 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-lg font-light" placeholder="Jane" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-background-alt border-b-2 border-border-subtle rounded-none px-0 py-4 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-lg font-light" placeholder="Doe" />
                </div>
              </motion.div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-background-alt border-b-2 border-border-subtle rounded-none px-0 py-4 focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-lg font-light" placeholder="jane@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                <div className="relative">
                  <select className="w-full bg-background-alt border-b-2 border-border-subtle rounded-none px-0 py-4 focus:outline-none focus:border-primary transition-all text-lg font-light appearance-none">
                    <option>Consulting Inquiry</option>
                    <option>Tech Services</option>
                    <option>Media Relations</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-background-alt border-b-2 border-border-subtle rounded-none px-0 py-4 focus:outline-none focus:border-primary transition-all text-lg font-light resize-none" placeholder="How can we help you?"></textarea>
              </div>
                              <button
                  type="submit"
                  {...fadeUp(0.12)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary text-text-on-dark font-black uppercase tracking-[0.2em] py-6 rounded-full hover:bg-primary-hover transition-colors duration-300 flex items-center justify-center gap-4 group shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
            </form>
          </motion.div>

          {/* Contact Info - Specialist Tool Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between min-w-0"
          >
            <div className="space-y-10 sm:space-y-16">
              {[
                { icon: Mail, label: "Email Us", value: "contact@nexora.com", sub: "Typically responds within 24 hours." },
                { icon: Phone, label: "Call Us", value: "(346) 278-6004", sub: "Mon-Fri, 9am - 6pm GMT" },
                { icon: MapPin, label: "Visit Us", value: "London Office", sub: "20 Fenchurch St, London EC3M 3BY, UK" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} {...fadeUp(i * 0.08)} className="flex gap-4 sm:gap-8 group min-w-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-accent rounded-2xl sm:rounded-3xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform shadow-lg">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{item.label}</h3>
                      <p className="text-xl sm:text-2xl text-text-primary font-bold tracking-tight mb-1 break-words">{item.value}</p>
                      <p className="text-text-secondary font-light text-sm sm:text-base break-words">{item.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div {...fadeUp(0.15)} className="mt-12 sm:mt-20 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl sm:rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-surface shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  src="/images/shared/office-modern.webp"
                  alt="London Office"
                  className="w-full h-48 sm:h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 pr-4">
                  <p className="text-text-on-dark font-black text-xs uppercase tracking-widest">Headquarters</p>
                  <p className="text-text-on-dark/80 text-sm font-light">London, United Kingdom</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
