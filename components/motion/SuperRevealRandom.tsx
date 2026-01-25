"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function SuperRevealRandom({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  once = true,
}: Props) {
  // List of animation variants (more can be added!)
  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.7 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -20 },
      visible: { opacity: 1, rotate: 0 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
    pop3d: {
      hidden: { opacity: 0, rotateX: -45, scale: 0.8, y: 40 },
      visible: { opacity: 1, rotateX: 0, scale: 1, y: 0 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
    skew: {
      hidden: { opacity: 0, skewX: -20 },
      visible: { opacity: 1, skewX: 0 },
    },
    mask: {
      hidden: { clipPath: "inset(0 100% 0 0)" },
      visible: { clipPath: "inset(0 0 0 0)" },
    },
  };

  // pick random animation key
  const keys = Object.keys(animations) as Array<keyof typeof animations>;
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const selectedAnimation = animations[randomKey];

  return (
    <motion.div
      className={className}
      style={
        randomKey === "mask"
          ? { overflow: "hidden", display: "inline-block" }
          : {}
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
