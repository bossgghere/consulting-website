import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const FeatureItem = ({ text, isDark = false }: { text: string; isDark?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-3 group"
  >
    <CheckCircle2 className={`w-5 h-5 ${isDark ? 'text-bcg-neon' : 'text-bcg-forest'} shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
    <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} leading-relaxed`}>{text}</p>
  </motion.div>
);

export const Insights = () => {
  return (
    <div className="flex flex-col">
      {/* Software Testing Section - GREEN */}
      <section className="py-16 sm:py-24 bg-bcg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-bcg-neon mb-4 block">QUALITY ASSURANCE</span>
              <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">Software Testing</h2>
              <h3 className="text-xl sm:text-2xl font-light text-white/60 mb-6 sm:mb-8 italic">Reconsidering user experiences with software Testing</h3>
              
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                We offer the total scope of Quality software testing for an expansive cluster of client needs — across custom, computerized, bundled and evolving tech applications — to speed up and dexterity to showcase while giving separated client user experiences. Whether you need to put up a new software for marketing to the public at a quicker cut or change your testing capacity and work force — we have the right abilities and capacities to assist you with succeeding.
              </p>

              <div className="space-y-6">
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
              <div className="absolute -bottom-6 -left-6 bg-bcg-neon p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-bcg-dark font-bold text-xl">Quality First.</p>
                <p className="text-bcg-dark/70 text-sm">Zero-defect mindset.</p>
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
              <span className="text-[10px] font-black uppercase tracking-widest text-bcg-forest mb-4 block">MANAGED SERVICES</span>
              <h2 className="text-4xl sm:text-5xl font-light text-bcg-dark mb-4">IT Support</h2>
              <h3 className="text-xl sm:text-2xl font-light text-gray-500 mb-6 sm:mb-8 italic">Flourish business with managed IT solutions and services</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                We at Nexora handle all security, and IT monitoring for you. You will know your frameworks are persuasive each and every day. Access quality technical support rapidly. We keep up with definite documentation and analysis of your frameworks, and meet your expectations to stay up with the latest.
              </p>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-bcg-dark">Nexora Offers -</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureItem text="Server and organization support" />
                  <FeatureItem text="Managed IT Services" />
                  <FeatureItem text="Individual User Support" />
                  <FeatureItem text="Customized business IT Solutions" />
                  <FeatureItem text="Other security and Back-up" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
