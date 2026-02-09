import { assetPath } from "@/lib/base-path";

export default function S0ContentSection() {
  return (
    <section id="about" className="py-16 md:py-32 border-b">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          What is S0?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl to-transparent p-px ">
              <img
                src={assetPath("/s0.png")}
                className="rounded-[15px]"
                alt="S0 Gateway"
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              S0 is optimized for low-power IoT applications, offering efficient
              connectivity and processing capabilities. It is ideal for edge
              deployments where energy efficiency is critical. With its compact
              design and RISC-V architecture, S0 enables seamless integration
              with IoT devices, ensuring reliable performance in constrained
              environments.
            </p>
            <p className="text-muted-foreground">
              S0 is a modular IoT gateway platform combining the{" "}
              <span className="text-accent-foreground font-bold">
                S0 module with Base Board
              </span>{" "}
              for complete connectivity solutions.
            </p>
            <p className="text-muted-foreground">
              Built on ESP32-C6 RISC-V architecture running Zephyr RTOS, S0
              delivers multi-protocol connectivity including Wireless M-Bus,
              NB-IoT, LTE-M, WiFi, and Bluetooth LE. Perfect for smart metering,
              industrial automation, and edge computing applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
