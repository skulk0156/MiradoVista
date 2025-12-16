import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Custom hook to add a small delay before animations start.
 * This prevents initial lag by allowing the browser to finish rendering.
 */
function useIsReady(delay = 50) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isReady;
}

// 1. Container variant for staggering cards
export const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly reduced for snappier feel
      delayChildren: 0.2,    // Delay before children start animating
    },
  },
};

// 2. Card/Item variant (Fade Up)
export const itemVariant = {
  hidden: { opacity: 0, y: 30 }, // Reduced distance for less jarring movement
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// 3. Simple Fade-in for Headings/CTAs
export const headingVariant = {
  hidden: { opacity: 0, x: -20 }, // Reduced distance
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ⭐ Default Page Animation Wrapper
// It now handles entrance and exit animations gracefully.
export default function AnimatedPage({ children }) {
  const isReady = useIsReady();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-content" // Important for AnimatePresence to detect changes
        initial="hidden"
        animate={isReady ? "visible" : "hidden"}
        exit="hidden"
        variants={containerVariant}
        // If user prefers reduced motion, use a simple, fast fade.
        transition={shouldReduceMotion ? { duration: 0.1 } : {}}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}