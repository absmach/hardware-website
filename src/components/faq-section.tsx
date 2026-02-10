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
      "The S0 Gateway is a modular IoT gateway solution combining our S0 module with the Base Board. It provides multi-protocol connectivity (LoRa, Bluetooth, WiFi, cellular) for smart metering, industrial IoT, and edge computing applications. The open-source hardware design ensures transparency and customization capabilities.",
  },
  {
    question: "What wireless protocols are supported?",
    answer:
      "Our IoT gateway supports multiple wireless protocols including LoRaWAN for long-range low-power communication, Bluetooth LE for short-range device connectivity, WiFi for high-bandwidth applications, and cellular (LTE-M/NB-IoT) for wide-area coverage. You can configure multiple protocols simultaneously for hybrid deployments.",
  },
  {
    question: "Is the hardware open source?",
    answer:
      "Yes! All our hardware designs, schematics, and PCB layouts are open source and available on our GitHub repository. This allows you to customize the hardware for your specific needs, audit the design for security, and even manufacture your own units. We believe in transparency and community-driven development.",
  },
  {
    question: "What kind of professional support is available?",
    answer:
      "We offer comprehensive professional support including hardware customization, firmware development, integration assistance, deployment planning, and ongoing technical support. Whether you need help with initial setup or scaling to thousands of devices, our team has expertise in industrial IoT deployments.",
  },
  {
    question: "What are typical use cases for the S0 Gateway?",
    answer:
      "Common applications include smart metering for utilities (water, gas, electricity), industrial automation with sensor networks, building management systems, environmental monitoring, asset tracking, and agricultural IoT. The modular design adapts to various deployment scenarios from single-site installations to distributed networks.",
  },
  {
    question: "How do I get started with the hardware?",
    answer:
      "Start by reviewing our technical documentation to understand the hardware specifications and capabilities. You can order development kits directly, or contact us for custom configurations. Our documentation includes setup guides, integration examples, and API references to help you deploy quickly. Professional support is available for complex deployments.",
  },
];

export const FAQSection = () => (
  <div id="faq" className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Frequently Asked Questions
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Everything you need to know about our modular IoT gateway
              solutions, hardware specifications, and integration capabilities.
            </p>
          </div>
          <div>
            <Link href="mailto:info@absmach.eu">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={`item-${faq.question + 1}`}
                className="border-b-2"
              >
                <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg leading-relaxed">
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
