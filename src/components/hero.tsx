"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import ReactDOM from "react-dom";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/base-path";

const TextEffect = dynamic(
  () =>
    import("@/components/motion-primitives/text-effect").then(
      (m) => m.TextEffect,
    ),
  { ssr: false },
);

const AnimatedGroup = dynamic(
  () =>
    import("@/components/motion-primitives/animated-group").then(
      (m) => m.AnimatedGroup,
    ),
  { ssr: false },
);

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const HeroSection = () => {
  ReactDOM.preload(assetPath("/s1-poster.jpg"), { as: "image" });
  return (
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate hidden contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="sm:mx-auto lg:mr-auto lg:mt-0">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 max-w-2xl text-balance text-3xl font-medium sm:text-5xl md:text-6xl lg:mt-16"
              >
                Swiss Knife for Wireless IoT
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mt-6 max-w-2xl text-pretty text-base sm:text-lg md:mt-8"
              >
                Modular IoT gateway solutions for smart metering, industrial
                IoT, and edge computing. S0 module and Base Board deliver
                multi-protocol connectivity with open-source hardware and
                professional support.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex items-center gap-2"
              >
                <Button
                  key={1}
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-5 text-base"
                >
                  <Link href="/s0">
                    <span className="text-nowrap">S0 Gateway</span>
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-5 text-base"
                >
                  <Link href="/s1">
                    <span className="text-nowrap">S1 Gateway</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="mask-b-from-55% relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <video
                  className="aspect-15/8 relative rounded-2xl w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={assetPath("/s1-poster.jpg")}
                  width={800}
                  height={480}
                >
                  <source src={assetPath("/s1.mp4")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
};
