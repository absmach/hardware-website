"use client";

import { ArrowRight, Menu, Rocket, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Documentation", href: "/docs/s0-gateway" },
];

export default function S0HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header>
        <nav className="fixed z-20 w-full border-b border-dashed bg-white/80 backdrop-blur-md md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
          <div className="m-auto max-w-5xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-3 lg:py-4">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <span className="text-lg font-bold sm:text-xl">S0 Gateway</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-accent-foreground text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
                type="submit"
              >
                {menuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>

            {menuOpen && (
              <div className="lg:hidden border-t py-4">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-muted-foreground hover:text-accent-foreground block py-2 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main className="overflow-hidden pt-14 md:pt-0">
        <section className="relative border-b container mx-auto">
          <div className="relative py-12 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/docs/s0-gateway"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Open Source Hardware</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-2xl font-semibold sm:text-4xl md:text-5xl xl:[line-height:1.125]">
                  S0 – Zephyr-based Gateway <br className="hidden sm:block" />{" "}
                  for Wireless IoT
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-wrap text-base sm:text-lg sm:mt-8">
                  S0 combines the S0 Board with the Baseboard into a low-power,
                  Zephyr RTOS gateway. Built on ESP32-C6 RISC-V, it delivers
                  multi-protocol wireless connectivity for smart metering,
                  industrial automation, and constrained edge deployments.
                </p>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/docs/s0-gateway/getting-started">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
