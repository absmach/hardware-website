import { Check } from "lucide-react";
import { assetPath } from "@/lib/base-path";

const s0BoardSpecs = [
  "ESP32-C6 RISC-V Core",
  "Wireless M-Bus (868 MHz)",
  "NB-IoT / LTE-M (SIM7080G)",
  "WiFi & Bluetooth LE",
  "Zephyr RTOS",
  "Open Source Hardware",
];

const beagleVFireSpecs = [
  "RISC-V Linux SoC (PolarFire)",
  "Full Linux Operating System",
  "High-Performance Edge Compute",
  "Advanced Networking Stack",
  "Container & Wasm Workloads",
  "Edge AI / ML Inference",
];

export default function S1ContentSection() {
  return (
    <section id="about" className="border-b">
      <div className="py-12 sm:py-20 lg:py-28 border-b">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 md:space-y-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Component 1
            </p>
            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
              S0 Board
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl to-transparent p-px">
                <img
                  src={assetPath("/s0.png")}
                  className="rounded-[15px]"
                  alt="S0 Board"
                  width={1187}
                  height={1200}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative space-y-6">
              <p className="text-muted-foreground">
                The{" "}
                <span className="text-accent-foreground font-bold">
                  S0 Board
                </span>{" "}
                is the wireless connectivity core of the S1 gateway. It handles
                multi-protocol wireless data collection — Wireless M-Bus,
                NB-IoT, LTE-M, WiFi, and BLE — and passes data to the
                BeagleV-Fire for Linux-side processing and cloud backhaul.
              </p>
              <ul className="space-y-2">
                {s0BoardSpecs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 md:space-y-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Component 2
            </p>
            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
              BeagleV-Fire
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl to-transparent p-px">
                <img
                  src={assetPath("/beaglev-fire.webp")}
                  className="rounded-[15px]"
                  alt="BeagleV-Fire"
                  width={500}
                  height={281}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative space-y-6">
              <p className="text-muted-foreground">
                The{" "}
                <span className="text-accent-foreground font-bold">
                  BeagleV-Fire
                </span>{" "}
                brings a full{" "}
                <span className="text-accent-foreground font-bold">
                  Linux operating system
                </span>{" "}
                to the S1 gateway on a RISC-V PolarFire SoC. It provides the
                compute power needed for containerised workloads, edge AI
                inference, advanced networking, and seamless cloud integration —
                capabilities not available on a bare-metal RTOS.
              </p>
              <ul className="space-y-2">
                {beagleVFireSpecs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
