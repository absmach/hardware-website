import Link from "fumadocs-core/link";
import { PhoneCall } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is the S0 Gateway?",
    answer:
      "The S0 Gateway is a modular, Zephyr-based IoT gateway combining the S0 Board with the Baseboard. It provides multi-protocol connectivity (Wireless M-Bus, NB-IoT, LTE-M, WiFi, BLE) for smart metering, industrial IoT, and edge computing applications. Running Zephyr RTOS on an ESP32-C6 RISC-V core, S0 is optimised for low-power, constrained environments.",
  },
  {
    question: "What is the S1 Gateway?",
    answer:
      "The S1 Gateway is a Linux-based IoT gateway that combines the S0 Board with the BeagleV-Fire board. Unlike S0, which runs Zephyr RTOS, S1 runs a full Linux operating system on RISC-V architecture. This makes it ideal for applications that require advanced processing power, containerised workloads, edge AI inference, or richer software stacks not available on a bare-metal RTOS.",
  },
  {
    question: "What is the difference between S0 and S1?",
    answer:
      "S0 is a Zephyr-based gateway built from the S0 Board and the Baseboard — designed for low-power, constrained IoT deployments. S1 is a Linux-based gateway built from the S0 Board and the BeagleV-Fire — designed for industrial IoT workloads that demand a full Linux OS, greater compute power, and edge-to-cloud integration. Both gateways share the same S0 Board and its multi-protocol wireless capabilities.",
  },
  {
    question: "Is S1 a standalone gateway?",
    answer:
      "Yes. S1 is a complete, standalone Linux-based IoT gateway. It combines the S0 module's multi-protocol wireless connectivity (Wireless M-Bus, NB-IoT, LTE-M, WiFi, BLE) with the BeagleV-Fire's Linux compute capabilities. You do not need a separate gateway — S1 handles both edge processing and cloud connectivity on its own.",
  },
  {
    question: "What wireless protocols are supported?",
    answer:
      "Both S0 and S1 gateways support multiple wireless protocols via the S0 module: Wireless M-Bus (868 MHz) for smart metering, Bluetooth LE for short-range device connectivity, WiFi for high-bandwidth applications, and cellular (LTE-M/NB-IoT) for wide-area coverage. Multiple protocols can be active simultaneously for hybrid deployments.",
  },
  {
    question: "Is the hardware open source?",
    answer:
      "Yes. All hardware designs, schematics, and PCB layouts are open source and available on our GitHub repository. This allows you to customise the hardware for your specific needs, audit the design for security, and manufacture your own units. We believe in transparency and community-driven development.",
  },
  {
    question: "What are typical use cases for S0 and S1?",
    answer:
      "S0 is well-suited for smart metering (water, gas, electricity), building management systems, environmental monitoring, and agricultural IoT where low-power Zephyr-based operation is preferred. S1 excels in industrial automation, edge AI inference, protocol translation gateways, smart city deployments, and enterprise IoT solutions that benefit from a full Linux environment.",
  },
  {
    question: "How do I get started with the hardware?",
    answer:
      "Start by reviewing our technical documentation for the gateway you need — S0 for Zephyr-based deployments, S1 for Linux-based deployments. You can order development kits directly, or contact us for custom configurations. Our documentation includes setup guides, integration examples, and API references. Professional support is available for complex deployments.",
  },
];

export const FAQSection = () => (
  <div id="faq" className="w-full py-12 sm:py-20 lg:py-28 px-4 sm:px-6">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-2xl sm:text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Frequently Asked Questions
            </h4>
            <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Everything you need to know about our modular IoT gateway
              solutions, hardware specifications, and integration capabilities.
            </p>
          </div>
          <div>
            <Link href="mailto:info@absmach.eu">
              <Button className="gap-2 sm:gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto px-0 sm:px-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index + 1}`}
                className="border-b-2"
              >
                <AccordionTrigger className="text-base sm:text-lg md:text-xl py-4 sm:py-6 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
