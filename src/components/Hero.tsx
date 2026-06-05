import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { staggerContainer, staggerItem, easeOut } from '../motionPresets';

const HERO_IMAGES = [
  '/hero-images/hero-1.webp',
  '/hero-images/hero-2.webp',
  '/hero-images/hero-3.jpg',
  '/hero-images/hero-4.jpg',
  '/hero-images/hero-5.jpg',
  '/hero-images/hero-6.jpg',
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Slower for premium feel
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: shouldReduceMotion ? 0 : (direction > 0 ? '10%' : '-10%'),
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.02,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: shouldReduceMotion ? 0 : (direction < 0 ? '5%' : '-5%'),
      opacity: 0,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
      transition: { duration: 0.6, ease: easeOut }
    }),
  };

  const textReveal = {
    hidden: { opacity: 0, y: 12, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  return (
    <section className="relative bg-background-alt pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-0 overflow-hidden">
      {/* Background Decorative System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, var(--theme-primary) 1px, transparent 1.5px)`, 
            backgroundSize: '32px 32px' 
          }} 
        />
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, var(--theme-primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--theme-primary) 1px, transparent 1px)
            `, 
            backgroundSize: '128px 128px' 
          }} 
        />
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--theme-accent),transparent_70%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1
            variants={textReveal}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-text-primary mb-6 sm:mb-10 tracking-tight"
          >
            Nexora
          </motion.h1>
          <motion.div
            variants={staggerItem}
            className="relative w-full aspect-[4/3] sm:aspect-[2/1] lg:aspect-[21/9] xl:aspect-[25/9] min-h-[220px] sm:min-h-0 overflow-hidden rounded-lg sm:rounded-sm shadow-2xl group"
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <motion.img
                  src={HERO_IMAGES[currentIndex]}
                  alt={`Professional workspace ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 1.04],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/10 transition-colors shadow-xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/10 transition-colors shadow-xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="relative h-1 w-8 sm:w-12 overflow-hidden bg-white/20 rounded-full"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-accent"
                    initial={false}
                    animate={{ 
                      x: index === currentIndex ? '0%' : '-100%',
                    }}
                    transition={{ duration: 0.6, ease: easeOut }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
