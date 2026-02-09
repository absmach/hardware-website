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

export default function S0FeaturesSection() {
  return (
    <section
      id="features"
      className=" py-16 md:py-32 dark:bg-transparent border-b"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built for Industrial IoT
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need for smart metering and industrial automation in
            a modular, open-source platform.
          </p>
        </div>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Radio className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Multi-Protocol</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Support for Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE.
                Connect any device with any protocol.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BatteryCharging className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Low Power Design</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Ultra-low power operation with battery backup and charging.
                Perfect for remote deployments.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Cpu className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Modular Architecture</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                ESP32-C6 RISC-V core with expansion options. Add Ethernet,
                M-Bus, and SD card logging.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ShieldCheck className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Secure by Design</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Built on Zephyr RTOS with secure boot and encrypted
                communication for mission-critical apps.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Edge Computing</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Run Wasm workloads at the edge. Perform AI inference and data
                processing locally.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Open Source</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                All hardware designs and firmware are open source. Customize and
                extend as needed.
              </p>
            </CardContent>
          </div>
        </Card>
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
