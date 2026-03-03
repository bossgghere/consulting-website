import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16 sm:mb-24"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-bcg-forest mb-6 sm:mb-8 block">GET IN TOUCH</span>
          <h1 className="text-5xl sm:text-8xl md:text-[10rem] font-light text-bcg-dark mb-8 sm:mb-12 tracking-tighter leading-[0.8]">
            Contact <br /> <span className="italic font-serif">Us</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
            Have a question or want to discuss a project? Reach out to our global team of experts.
            We're here to help you navigate your most complex challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Contact Form - Clean Utility Style */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[3rem] shadow-2xl border border-gray-100"
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
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 rounded-none px-0 py-4 focus:outline-none focus:border-bcg-forest focus-visible:ring-2 focus-visible:ring-bcg-forest/20 transition-all text-lg font-light" placeholder="Jane" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 rounded-none px-0 py-4 focus:outline-none focus:border-bcg-forest focus-visible:ring-2 focus-visible:ring-bcg-forest/20 transition-all text-lg font-light" placeholder="Doe" />
                </div>
              </motion.div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-100 rounded-none px-0 py-4 focus:outline-none focus:border-bcg-forest focus-visible:ring-2 focus-visible:ring-bcg-forest/20 transition-all text-lg font-light" placeholder="jane@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border-b-2 border-gray-100 rounded-none px-0 py-4 focus:outline-none focus:border-bcg-forest transition-all text-lg font-light appearance-none">
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
                <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-100 rounded-none px-0 py-4 focus:outline-none focus:border-bcg-forest transition-all text-lg font-light resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-bcg-dark text-white font-black uppercase tracking-[0.2em] py-6 rounded-full hover:bg-bcg-forest transition-all duration-300 flex items-center justify-center gap-4 group shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bcg-forest active:scale-[0.99]">
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
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-16">
              {[
                { icon: <Mail />, label: "Email Us", value: "contact@nexora.com", sub: "Typically responds within 24 hours." },
                { icon: <Phone />, label: "Call Us", value: "(346) 278-6004", sub: "Mon-Fri, 9am - 6pm GMT" },
                { icon: <MapPin />, label: "Visit Us", value: "London Office", sub: "20 Fenchurch St, London EC3M 3BY, UK" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-bcg-forest text-bcg-neon rounded-3xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform shadow-lg">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{item.label}</h3>
                    <p className="text-2xl text-bcg-dark font-bold tracking-tight mb-1">{item.value}</p>
                    <p className="text-gray-500 font-light">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-20 relative group">
              <div className="absolute inset-0 bg-bcg-forest/20 rounded-2xl sm:rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="London Office"
                  className="w-full h-48 sm:h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bcg-dark/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-black text-xs uppercase tracking-widest">Headquarters</p>
                  <p className="text-white/80 text-sm font-light">London, United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
