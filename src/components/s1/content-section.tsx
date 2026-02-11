import { assetPath } from "@/lib/base-path";

export default function S1ContentSection() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 border-b">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          What is S1?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl to-transparent p-px ">
              <img
                src={assetPath("/baseboard.png")}
                className="rounded-[15px]"
                alt="S1 Gateway"
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              S1 is designed for industrial IoT applications, providing{" "}
              <span className="text-accent-foreground font-bold">
                advanced connectivity and processing capabilities
              </span>
              . It is built on RISC-V architecture and runs a Linux-based
              platform for scalability and reliability.
            </p>
            <p className="text-muted-foreground">
              With robust connectivity and edge-to-cloud integration, S1 is
              ideal for industrial environments requiring high-performance
              computing and seamless integration with existing infrastructure.
            </p>
            <p className="text-muted-foreground">
              The S1 gateway combines powerful processing with flexible
              connectivity options, making it perfect for demanding industrial
              automation, smart city deployments, and enterprise IoT solutions
              that need reliable, scalable performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
