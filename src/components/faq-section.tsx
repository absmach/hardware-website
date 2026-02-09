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
            <AccordionItem value="item-1" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What is the S0 Gateway?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                The S0 Gateway is a modular IoT gateway solution combining our
                S0 module with the Base Board. It provides multi-protocol
                connectivity (LoRa, Bluetooth, WiFi, cellular) for smart
                metering, industrial IoT, and edge computing applications. The
                open-source hardware design ensures transparency and
                customization capabilities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What wireless protocols are supported?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Our IoT gateway supports multiple wireless protocols including
                LoRaWAN for long-range low-power communication, Bluetooth LE for
                short-range device connectivity, WiFi for high-bandwidth
                applications, and cellular (LTE-M/NB-IoT) for wide-area
                coverage. You can configure multiple protocols simultaneously
                for hybrid deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                Is the hardware open source?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Yes! All our hardware designs, schematics, and PCB layouts are
                open source and available on our GitHub repository. This allows
                you to customize the hardware for your specific needs, audit the
                design for security, and even manufacture your own units. We
                believe in transparency and community-driven development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What kind of professional support is available?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                We offer comprehensive professional support including hardware
                customization, firmware development, integration assistance,
                deployment planning, and ongoing technical support. Whether you
                need help with initial setup or scaling to thousands of devices,
                our team has expertise in industrial IoT deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                What are typical use cases for the S0 Gateway?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Common applications include smart metering for utilities (water,
                gas, electricity), industrial automation with sensor networks,
                building management systems, environmental monitoring, asset
                tracking, and agricultural IoT. The modular design adapts to
                various deployment scenarios from single-site installations to
                distributed networks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b-2">
              <AccordionTrigger className="text-lg md:text-xl py-6 hover:no-underline">
                How do I get started with the hardware?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg leading-relaxed">
                Start by reviewing our technical documentation to understand the
                hardware specifications and capabilities. You can order
                development kits directly, or contact us for custom
                configurations. Our documentation includes setup guides,
                integration examples, and API references to help you deploy
                quickly. Professional support is available for complex
                deployments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
