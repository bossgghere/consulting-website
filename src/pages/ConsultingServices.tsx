import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  CloudRain,
  Settings,
  Clock,
  Database,
  ShieldCheck,
  TestTube2,
  PieChart,
  ArrowRight,
  Search,
  Map,
  Rocket,
} from 'lucide-react';
import { CONSULTING_SERVICES, PROCESS_STEPS } from '../data/consultingServices';
import type { ServiceSlug } from '../data/consultingServices';

const ICON_MAP: Record<string, React.ReactNode> = {
  'application-development': <Code2 className="w-6 h-6" />,
  'cloud-migration': <CloudRain className="w-6 h-6" />,
  automation: <Settings className="w-6 h-6" />,
  'round-the-clock-support': <Clock className="w-6 h-6" />,
  infrastructure: <Database className="w-6 h-6" />,
  'it-security': <ShieldCheck className="w-6 h-6" />,
  'software-testing': <TestTube2 className="w-6 h-6" />,
  'bi-development': <PieChart className="w-6 h-6" />,
  'process-discovery': <Search className="w-6 h-6" />,
  'process-strategy': <Map className="w-6 h-6" />,
  'process-execution': <Rocket className="w-6 h-6" />,
};

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
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-forest mb-4 sm:mb-6 block">
              STRATEGY & IMPACT
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-light text-bcg-dark mb-6 sm:mb-8 tracking-tighter leading-[0.9]">
              Services <br /> <span className="italic font-serif">We Offer</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-lg">
              At Nexora, we provide a comprehensive suite of consulting and technical services
              designed to drive transformation and deliver bottom-line impact for your business.
            </p>
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

      {/* Main Content - Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CONSULTING_SERVICES.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`p-6 sm:p-10 bg-white rounded-2xl sm:rounded-[2rem] border border-gray-100 hover:border-bcg-neon transition-all duration-300 group flex flex-col cursor-default ${
                item.size === 'large' ? 'lg:col-span-2' : ''
              } shadow-sm hover:shadow-2xl`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-bcg-forest text-bcg-neon rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:rotate-12 transition-transform shadow-lg">
                {ICON_MAP[item.slug]}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-bcg-dark mb-3 sm:mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow text-base sm:text-lg font-light">
                {item.shortDescription}
              </p>
              <button
                type="button"
                onClick={() => onNavigateToService?.(item.slug)}
                className="flex items-center gap-3 text-bcg-forest font-black uppercase tracking-widest text-[11px] group/btn w-fit"
              >
                <span className="relative">
                  Read more
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bcg-neon transition-all group-hover/btn:w-full" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 sm:py-32 bg-bcg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bcg-forest/20 skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-bcg-neon mb-4 sm:mb-6 block">
                OUR PROCESS
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-light mb-8 sm:mb-12 tracking-tight">
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
                        className="flex items-center gap-2 text-bcg-neon font-bold uppercase tracking-widest text-[11px] group/btn w-fit"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
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
              <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-36 h-36 sm:w-48 sm:h-48 bg-bcg-neon rounded-full flex items-center justify-center text-bcg-dark p-6 sm:p-8 text-center">
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
