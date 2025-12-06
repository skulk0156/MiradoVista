import { motion } from "framer-motion";

// 1. Container variant for staggering cards
export const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 2. Card/Item variant (Fade Up)
export const itemVariant = {
  hidden: { opacity: 0, y: 50 },
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ⭐ Default Page Animation Wrapper
export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
