import {
  BatteryCharging,
  Cpu,
  Radio,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: Radio,
    title: "Multi-Protocol",
    description:
      "Support for Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Connect any device with any protocol.",
  },
  {
    icon: BatteryCharging,
    title: "Low Power Design",
    description:
      "Ultra-low power operation with battery backup and charging. Perfect for remote deployments.",
  },
  {
    icon: Cpu,
    title: "Modular Architecture",
    description:
      "ESP32-C6 RISC-V core with expansion options. Add Ethernet, M-Bus, and SD card logging.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Built on Zephyr RTOS with secure boot and encrypted communication for mission-critical apps.",
  },
  {
    icon: Zap,
    title: "Edge Computing",
    description:
      "Run Wasm workloads at the edge. Perform AI inference and data processing locally.",
  },
  {
    icon: Settings2,
    title: "Open Source",
    description:
      "All hardware designs and firmware are open source. Customize and extend as needed.",
  },
];

export default function S0FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-20 lg:py-28 border-b">
      <div className="@container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built for Industrial IoT
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need for smart metering and industrial automation in
            a modular, open-source platform.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-6 sm:max-w-full sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="group shadow-zinc-950/5">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon className="size-6" aria-hidden />
                  </CardDecorator>

                  <h3 className="mt-6 font-medium">{feature.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
