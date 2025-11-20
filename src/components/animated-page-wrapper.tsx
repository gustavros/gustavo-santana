"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

interface AnimatedPageWrapperProps {
  children: ReactNode;
}

export function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  return (
    <motion.section
      className="mx-auto w-full max-w-5xl space-y-6 py-5 print:space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={{ overflow: "visible" }}
    >
      {children}
    </motion.div>
  );
}
