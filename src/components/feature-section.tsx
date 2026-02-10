import {
  BatteryCharging,
  Cpu,
  Network,
  Radio,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function FeatureSection() {
  const features = [
    {
      icon: Radio,
      title: "Multi-Protocol Connectivity",
      description:
        "Support for Wireless M-Bus, NB-IoT, LTE-M, WiFi, BLE, and Ethernet. Connect any device, any protocol, anywhere.",
    },
    {
      icon: Zap,
      title: "Edge Computing Ready",
      description:
        "Run Wasm workloads at the edge. Perform AI inference, data processing, and protocol translation locally.",
    },
    {
      icon: BatteryCharging,
      title: "Low Power Operation",
      description:
        "Ultra-low power design with battery backup and charging circuit. Perfect for remote deployments and off-grid installations.",
    },
    {
      icon: ShieldCheck,
      title: "Secure by Design",
      description:
        "Built on Zephyr RTOS with secure boot, encrypted communication, and sandboxed execution for mission-critical applications.",
    },
    {
      icon: Network,
      title: "Magistrala Integration",
      description:
        "Native integration with Magistrala IoT platform for seamless data ingestion, device management, and cloud connectivity.",
    },
    {
      icon: Cpu,
      title: "Modular Architecture",
      description:
        "ESP32-C6 RISC-V core with expansion options. Add M-Bus, Ethernet, SD card logging, and more via the Base Board.",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Industrial IoT Gateway Platform
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open-source hardware with professional support. Modular design for
            smart metering, industrial automation, and edge computing.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-6 *:text-center sm:max-w-full sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
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
