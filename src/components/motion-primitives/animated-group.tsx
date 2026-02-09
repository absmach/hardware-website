"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedGroupProps {
  children: ReactNode;
  variants: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
}

export function AnimatedGroup({
  children,
  variants,
  className,
}: AnimatedGroupProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants.container}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={child.key || index} variants={variants.item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
