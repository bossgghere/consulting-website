import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { getServiceBySlug } from '../data/consultingServices';
import type { ServiceSlug } from '../data/consultingServices';

interface ServiceDetailProps {
  slug: ServiceSlug;
  onBack: () => void;
}

const ServiceDetail = ({ slug, onBack }: ServiceDetailProps) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24 pb-12 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-bcg-dark mb-4">Page not found</h1>
          <motion.button
            type="button"
            onClick={onBack}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
            className="text-bcg-forest font-bold uppercase tracking-widest flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Consulting
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const isProcess = slug.startsWith('process-');

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="flex items-center gap-2 text-bcg-forest font-black uppercase tracking-widest text-[11px] mb-8 sm:mb-12 hover:gap-4 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to {isProcess ? 'Process' : 'Services'}
        </motion.button>

        {/* Hero image - one per page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[21/10] sm:aspect-[3/1] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl mb-8 sm:mb-12 grayscale hover:grayscale-0 transition-all duration-700 group"
        >
          <motion.img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Title */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-black uppercase tracking-[0.3em] text-bcg-forest block mb-4"
        >
          {isProcess ? 'Our Process' : 'Consulting Service'}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-bcg-dark tracking-tight mb-6 sm:mb-8"
        >
          {service.title}
        </motion.h1>

        {/* Long description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
            {service.longDescription}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-14"
        >
          <motion.button
            type="button"
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-bcg-forest text-bcg-neon font-bold uppercase tracking-widest text-xs rounded-full hover:bg-bcg-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
