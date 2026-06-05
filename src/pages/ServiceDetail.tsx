import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/consultingServices';
import type { ServiceSlug } from '../data/consultingServices';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug as ServiceSlug);

  if (!service) {
    return (
      <div className="bg-background-alt min-h-screen pt-20 sm:pt-24 pb-12 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-text-primary mb-4">Page not found</h1>
          <Link
            to="/consulting-services"
            className="text-primary font-bold uppercase tracking-widest flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Consulting
          </Link>
        </motion.div>
      </div>
    );
  }

  const isProcess = slug?.startsWith('process-');

  return (
    <div className="bg-background-alt min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/consulting-services"
          className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[11px] mb-8 sm:mb-12 hover:gap-4 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to {isProcess ? 'Process' : 'Services'}
        </Link>

        {/* Hero image - one per page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[21/10] sm:aspect-[3/1] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl mb-8 sm:mb-12 transition-all duration-700 group"
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
          className="text-xs font-black uppercase tracking-[0.3em] text-primary block mb-4"
        >
          {isProcess ? 'Our Process' : 'Consulting Service'}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-text-primary tracking-tight mb-6 sm:mb-8"
        >
          {service.title}
        </motion.h1>

        {/* Long description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="prose prose-lg max-w-3xl"
        >
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-light">
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
          <Link
            to="/consulting-services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-text-on-dark font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
