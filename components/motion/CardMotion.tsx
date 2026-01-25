"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardMotionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  whileInView?: any;
  animate?: any;
  transition?: any;
}

export default function CardMotion({
  children,
  className = "",
  initial,
  whileInView,
  animate,
  transition,
}: CardMotionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      transition={transition}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
