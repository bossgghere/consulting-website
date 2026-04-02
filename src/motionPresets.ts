/**
 * Minimal shared motion props — subtle fade/slide on scroll.
 */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const viewPort = { once: true, margin: '-48px' } as const;

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewPort,
    transition: { duration: 0.48, delay, ease: easeOut },
  };
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: viewPort,
    transition: { duration: 0.45, delay, ease: easeOut },
  };
}

export function fadeLeft(delay = 0) {
  return {
    initial: { opacity: 0, x: -16 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewPort,
    transition: { duration: 0.48, delay, ease: easeOut },
  };
}

export function fadeRight(delay = 0) {
  return {
    initial: { opacity: 0, x: 16 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewPort,
    transition: { duration: 0.48, delay, ease: easeOut },
  };
}

/** Staggered children on load (use with initial="hidden" animate="visible") */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};
