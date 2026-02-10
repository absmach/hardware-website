"use client";

import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import { useMemo } from "react";

type PresetType = "fade-in" | "fade-in-blur" | "slide-up" | "slide-down";

interface TextEffectProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: string;
  per?: "word" | "char" | "line";
  as?: keyof typeof motion;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  speedSegment?: number;
}

const presetVariants: Record<
  PresetType,
  {
    hidden: { opacity: number; filter?: string; y?: number };
    visible: { opacity: number; filter?: string; y?: number };
  }
> = {
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-in-blur": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
};

export function TextEffect({
  children,
  per = "word",
  as = "p",
  preset = "fade-in",
  delay = 0,
  trigger = true,
  speedSegment = 0.1,
  ...props
}: TextEffectProps) {
  const MotionComponent = motion[as] as typeof motion.div;
  const segments = useMemo(() => {
    if (per === "line") {
      return children.split("\n");
    }
    if (per === "word") {
      return children.split(" ");
    }
    return children.split("");
  }, [children, per]);

  const variants = presetVariants[preset];

  return (
    <MotionComponent
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      transition={{
        staggerChildren: speedSegment,
        delayChildren: delay,
      }}
      {...props}
    >
      {segments.map((segment, index) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: segments can repeat
          key={`${segment}-${index}`}
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{ display: "inline-block" }}
        >
          {segment}
          {per === "word" && index < segments.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
