import Link from "fumadocs-core/link";
import { Check, CircuitBoard, Cpu, MoveRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsSection() {
  const products = [
    {
      icon: Cpu,
      name: "S0 IoT Gateway",
      tagline: "Swiss knife for wireless IoT",
      description:
        "Modular IoT gateway powered by ESP32-C6 RISC-V. Multi-protocol support including Wireless M-Bus, NB-IoT, LTE-M, WiFi, and BLE. Runs Zephyr RTOS.",
      features: [
        "ESP32-C6 RISC-V Core",
        "Wireless M-Bus (868 MHz)",
        "NB-IoT / LTE-M",
        "WiFi & BLE",
        "Zephyr RTOS",
      ],
      docsLink: "/docs/s0-gateway",
      learnMoreLink: "/s0",
    },
    {
      icon: CircuitBoard,
      name: "S1 IoT Gateway",
      tagline: "Linux-powered gateway for industrial IoT",
      description:
        "S1 combines the S0 module with BeagleV-Fire to deliver a full Linux-based gateway. Ideal for demanding industrial IoT deployments that require advanced processing, rich OS support, and seamless edge-to-cloud integration.",
      features: [
        "S0 Board + BeagleV-Fire",
        "Linux-Based OS",
        "RISC-V Architecture",
        "Advanced Edge Computing",
        "Edge-to-Cloud Integration",
        "Industrial-Grade Connectivity",
      ],
      docsLink: "/docs/s1-gateway",
      learnMoreLink: "/s1",
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-20 lg:py-28">
      <div className="@container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Modular Hardware for Every Use Case
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Choose the right gateway for your IoT deployment. S0 is a
            Zephyr-based gateway built on the S0 Board and Baseboard. S1 is a
            Linux-based gateway combining the S0 Board with BeagleV-Fire for
            more demanding industrial workloads.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className="group relative flex flex-col overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <CardHeader className="relative px-4 sm:px-6">
                  <ProductIconDecorator>
                    <Icon className="size-6 sm:size-8" aria-hidden />
                  </ProductIconDecorator>

                  <CardTitle className="mt-4 sm:mt-6 text-xl sm:text-2xl">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base italic text-muted-foreground">
                    {product.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative flex-1 space-y-4 sm:space-y-6 px-4 sm:px-6">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {product.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-sm font-semibold">Key Features:</p>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="mt-0.5 flex size-4 sm:size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="size-2.5 sm:size-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="relative flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6 px-4 sm:px-6">
                  <Link href={product.docsLink} className="w-full sm:flex-1">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full gap-2 transition-all group-hover:border-primary/50"
                      aria-label={`${product.name} documentation`}
                    >
                      Documentation{" "}
                      <MoveRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link
                    href={product.learnMoreLink}
                    className="w-full sm:flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full gap-2"
                      aria-label={`Get started with ${product.name}`}
                    >
                      Get Started{" "}
                      <MoveRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ProductIconDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative inline-flex size-20 items-center justify-center">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-xl transition-all group-hover:blur-2xl" />
    <div className="relative flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-transparent ring-1 ring-primary/20 transition-all group-hover:scale-105 group-hover:ring-primary/40">
      {children}
    </div>
  </div>
);
