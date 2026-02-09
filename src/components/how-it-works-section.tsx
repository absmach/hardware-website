import { Activity, Cpu, Database, Plug } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-5 flex justify-center">
            <Badge variant="default">How It Works</Badge>
          </div>
          <h2 className="text-3xl font-semibold text-balance md:text-5xl">
            From Hardware to Cloud in Four Steps
          </h2>
          <p className="text-muted-foreground mt-6 text-base text-balance md:text-lg">
            Deploy your IoT gateway infrastructure and start collecting data
            with our modular hardware platform designed for industrial IoT
            applications.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="bg-border absolute right-0 left-0 mt-6 h-0.5" />
            <div className="absolute right-0 left-0 mt-6 h-0.5 overflow-hidden">
              <div className="absolute inset-0 h-full w-32 animate-[progress-beam_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Plug className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Connect Hardware
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Assemble your S0 module with the Base Board and connect your
                    sensors, meters, or industrial devices.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Cpu className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Configure Gateway
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Set up multi-protocol connectivity including LoRa,
                    Bluetooth, WiFi, and cellular for your use case.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Database className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Collect & Process
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Gateway aggregates data from connected devices and processes
                    it locally at the edge for efficiency.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border-border bg-background relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2">
                  <Activity className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Stream to Cloud
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm text-balance">
                    Securely transmit processed data to your cloud platform for
                    analytics, visualization, and storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative space-y-4">
            <div className="bg-border absolute top-0 bottom-0 left-4 w-px" />

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Plug className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 1
                  </span>
                  <h3 className="mt-1 font-semibold">Connect Hardware</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Assemble your S0 module with the Base Board and connect your
                  sensors, meters, or industrial devices.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Cpu className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 2
                  </span>
                  <h3 className="mt-1 font-semibold">Configure Gateway</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Set up multi-protocol connectivity including LoRa, Bluetooth,
                  WiFi, and cellular for your use case.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Database className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 3
                  </span>
                  <h3 className="mt-1 font-semibold">Collect & Process</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Gateway aggregates data from connected devices and processes
                  it locally at the edge for efficiency.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="border-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full border sm:border-2">
                <Activity className="size-4" />
              </div>
              <div className="bg-muted grow rounded-lg border p-4">
                <div>
                  <span className="text-muted-foreground text-xs font-medium">
                    Step 4
                  </span>
                  <h3 className="mt-1 font-semibold">Stream to Cloud</h3>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Securely transmit processed data to your cloud platform for
                  analytics, visualization, and storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
