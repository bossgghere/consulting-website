import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const FeatureItem = ({ text, isDark = false }: { text: string; isDark?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-28px' }}
    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-start gap-3 group"
  >
    <CheckCircle2 className={`w-5 h-5 ${isDark ? 'text-bcg-neon' : 'text-bcg-forest'} shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
    <p className={isDark ? 'home-prose-invert' : 'home-prose'}>{text}</p>
  </motion.div>
);

export const Insights = () => {
  return (
    <div className="flex flex-col">
      {/* Software Testing Section - GREEN */}
      <section className="relative py-16 sm:py-24 bg-bcg-forest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,75,0.12),transparent)] pointer-events-none" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-bcg-neon block">
                Quality assurance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] font-light text-white leading-snug sm:leading-tight tracking-tight">
                End-to-end software testing—from strategy and automation to{' '}
                <span className="text-bcg-neon italic font-serif">insight-led quality</span>—built for applications
                that keep evolving and for user experiences that earn trust.
              </h2>
              <p className="home-prose-invert max-w-lg">
                Custom, packaged, or greenfield: we bring the scope, speed, and rigor to match—so you move to market
                with confidence.
              </p>

              <div className="space-y-6 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-bcg-neon">What do we deliver?</h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Specialized Testing empowering human-driven, advanced experiences across smart, associated technologies.',
                    'Application Quality Assurance by fueling velocity, quality and efficiency',
                    'Progressions with a mechanized, AI-based and analytics driven way to deal with quality for frameworks and applications.',
                    'Quality Transformation by Reinventing quality with an insight driven outlook and re-designed work force.',
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <FeatureItem isDark text={text} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Software Testing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-bcg-neon p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-bcg-dark font-bold text-lg">Quality First.</p>
                <p className="text-bcg-dark/70 text-xs">Zero-defect mindset.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Support Section - WHITE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                  alt="IT Support"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-bcg-forest mb-3 block">MANAGED SERVICES</span>
              <h2 className="text-3xl sm:text-4xl font-light text-bcg-dark mb-3">IT Support</h2>
              <h3 className="text-base sm:text-lg font-light leading-relaxed text-gray-500 mb-5 sm:mb-6 italic">
                Flourish business with managed IT solutions and services
              </h3>

              <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600 mb-8 max-w-xl">
                We at Nexora handle all security, and IT monitoring for you. You will know your frameworks are
                persuasive each and every day. Access quality technical support rapidly. We keep up with definite
                documentation and analysis of your frameworks, and meet your expectations to stay up with the latest.
              </p>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-bcg-dark">Nexora Offers -</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Server and organization support',
                    'Managed IT Services',
                    'Individual User Support',
                    'Customized business IT Solutions',
                    'Other security and Back-up',
                  ].map((text, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-24px' }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <FeatureItem text={text} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
