import React from 'react';
import { motion } from 'motion/react';
import { CONSULTING_SERVICES, PROCESS_STEPS } from '../data/consultingServices';
import type { ServiceSlug } from '../data/consultingServices';
import { staggerContainer, staggerItem, viewPort } from '../motionPresets';

interface ConsultingServicesProps {
  onNavigateToService?: (slug: ServiceSlug) => void;
}

const ConsultingServices = ({ onNavigateToService }: ConsultingServicesProps) => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section - Editorial Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-w-0"
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-black uppercase tracking-[0.3em] text-bcg-forest mb-4 sm:mb-6 block"
            >
              STRATEGY & IMPACT
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-bcg-dark mb-6 sm:mb-8 tracking-tighter leading-[0.9]"
            >
              Services <br /> <span className="italic font-serif">We Offer</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-lg"
            >
              At Nexora, we provide a comprehensive suite of consulting and technical services
              designed to drive transformation and deliver bottom-line impact for your business.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square max-w-lg mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 border border-bcg-forest/20 rounded-full animate-pulse hidden sm:block" />
            <div className="absolute inset-8 sm:inset-12 border border-bcg-forest/10 rounded-full hidden sm:block" />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
              alt="Consulting strategy"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Capability areas — editorial strips */}
      <section className="relative mb-20 sm:mb-32 border-t border-gray-200/80 bg-gradient-to-b from-[#f7f6f4] to-[#fdfcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewPort}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-black uppercase tracking-[0.3em] text-bcg-forest mb-4 block"
            >
              Capability areas
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-bcg-dark tracking-tight leading-[1.1] mb-5"
            >
              End-to-end services,{' '}
              <span className="italic font-serif text-bcg-forest">built around your outcomes</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed">
              Each practice pairs senior consultants with delivery teams—so recommendations ship, not
              sit in slides. Explore a lane below.
            </motion.p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="hidden lg:flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300" aria-hidden />
            <span>Scroll to explore</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300" aria-hidden />
          </div>

          <div className="space-y-10 sm:space-y-14 lg:space-y-20">
            {CONSULTING_SERVICES.map((item, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] border border-gray-200/90 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                >
                  <div className="grid lg:grid-cols-2 lg:min-h-[min(420px,70vh)]">
                    {/* Image */}
                    <div
                      className={`relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden ${
                        isReversed ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bcg-dark/45 via-bcg-dark/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-bcg-dark/10"
                        aria-hidden
                      />
                    </div>

                    {/* Copy */}
                    <motion.div
                      className={`flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-16 ${
                        isReversed ? 'lg:order-1' : ''
                      }`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewPort}
                      variants={staggerContainer}
                    >
                      <motion.div variants={staggerItem} className="flex items-baseline gap-4 mb-4 sm:mb-6">
                        <span
                          className="font-serif text-5xl sm:text-6xl leading-none text-bcg-forest/15 tabular-nums"
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-bcg-neon/80 to-transparent min-w-[2rem]" />
                      </motion.div>
                      <motion.h3
                        variants={staggerItem}
                        className="text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-4xl font-semibold text-bcg-dark tracking-tight mb-4 sm:mb-5"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        variants={staggerItem}
                        className="text-gray-600 text-base sm:text-lg leading-relaxed font-light mb-8 sm:mb-10 max-w-xl"
                      >
                        {item.shortDescription}
                      </motion.p>
                      <motion.button
                        type="button"
                        variants={staggerItem}
                        onClick={() => onNavigateToService?.(item.slug)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center self-start rounded-full border border-bcg-forest/20 bg-bcg-forest px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-bcg-dark hover:border-bcg-dark hover:shadow-lg"
                      >
                        View capability
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-bcg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bcg-forest/20 skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="min-w-0">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-neon mb-4 sm:mb-6 block">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-12 tracking-tight">
                How We <span className="italic font-serif">Deliver</span>
              </h2>
              <div className="space-y-8 sm:space-y-12">
                {PROCESS_STEPS.map((item, i) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 group"
                  >
                    <span className="text-3xl sm:text-4xl font-serif italic text-bcg-neon opacity-50 group-hover:opacity-100 transition-opacity">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base mb-4">
                        {item.shortDescription}
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigateToService?.(item.slug)}
                        className="text-bcg-neon font-bold uppercase tracking-widest text-[11px] w-fit underline-offset-4 hover:underline"
                      >
                        Read more
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative min-w-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-2xl sm:rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our Process"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute bottom-3 right-3 sm:-bottom-8 sm:-right-8 md:-bottom-12 md:-right-12 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-bcg-neon rounded-full flex items-center justify-center text-bcg-dark p-4 sm:p-6 md:p-8 text-center">
                <p className="font-black text-[10px] sm:text-xs uppercase tracking-widest">
                  Result Oriented
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices;
