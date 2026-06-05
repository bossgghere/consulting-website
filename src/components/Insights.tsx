import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { staggerContainer, staggerItem } from '../motionPresets';

const FeatureItem = ({ text, isDark = false }: { text: string; isDark?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-28px' }}
    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-start gap-3 group"
  >
    <CheckCircle2 className={`w-5 h-5 ${isDark ? 'text-accent' : 'text-primary'} shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
    <p className={isDark ? 'home-prose-invert' : 'home-prose'}>{text}</p>
  </motion.div>
);

export const Insights = () => {
  return (
    <div className="flex flex-col">
      {/* Software Testing Section - GREEN */}
      <section className="relative py-16 sm:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--theme-accent-subtle),transparent)] pointer-events-none" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-accent block">
                Quality assurance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] font-light text-text-on-dark leading-snug sm:leading-tight tracking-tight">
                End-to-end testing and <span className="text-accent italic font-serif">insight-led quality</span> for evolving digital ecosystems.
              </h2>
              <p className="home-prose-invert max-w-lg">
                From strategy to automation, we deliver the rigor and speed needed to move to market with total confidence.
              </p>

              <div className="space-y-6 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent">Our Delivery</h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Specialized Testing for smart, connected technologies.',
                    'Application QA fueling velocity and efficiency.',
                    'AI-driven quality for complex frameworks.',
                    'Insight-led Quality Transformation.',
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
                  src="/images/shared/software-testing.webp"
                  alt="Software Testing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-text-primary font-bold text-lg">Quality First.</p>
                <p className="text-text-primary/70 text-xs">Zero-defect mindset.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Support Section - WHITE */}
      <section className="py-16 sm:py-24 bg-surface">
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
                  src="/images/insights/cybersecurity-data.webp"
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
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">MANAGED SERVICES</span>
              <h2 className="text-3xl sm:text-4xl font-light text-text-primary mb-3">IT Support</h2>
              <h3 className="text-base sm:text-lg font-light leading-relaxed text-text-secondary mb-5 sm:mb-6 italic">
                Flourish business with managed IT solutions and services
              </h3>

              <p className="text-base sm:text-lg font-light leading-relaxed text-text-secondary mb-8 max-w-xl">
                We at Nexora handle all security, and IT monitoring for you. You will know your frameworks are
                persuasive each and every day. Access quality technical support rapidly. We keep up with definite
                documentation and analysis of your frameworks, and meet your expectations to stay up with the latest.
              </p>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary">Nexora Offers -</h4>
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
