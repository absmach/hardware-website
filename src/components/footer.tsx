import Link from "fumadocs-core/link";
import { Github, Linkedin, SendIcon, Twitter, Youtube } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { assetPath } from "@/lib/base-path";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img
        src={assetPath("/abstract-machines.svg")}
        height={120}
        width={120}
        className="invert dark:invert-0"
        alt="Abtract Machines logo"
      />
    </Link>
  );
};

export default function FooterSection() {
  return (
    <footer className="pt-12 sm:pt-20 lg:pt-28 pb-8">
      <div className="container mx-auto space-y-6 px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Abstract Machines, creators of S0 and S1, builds secure,
              open-source IoT gateway hardware for smart metering, industrial
              automation, and edge computing.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/absmach/s0"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Abstract Machines on GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://twitter.com/absmach"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Abstract Machines on Twitter"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/abstract-machines"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Abstract Machines on LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.youtube.com/@absmach"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Abstract Machines on YouTube"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Resources</h3>
            <ul className="[&_li_a]:text-muted-foreground [&_li_a]:hover:text-foreground space-y-2 [&_li_a]:block [&_li_a]:text-sm [&_li_a]:transition-colors [&_li_a]:hover:underline">
              <li>
                <Link href="/docs">Documentation</Link>
              </li>
              <li>
                <Link href="https://github.com/absmach/s0" target="_blank">
                  GitHub Repository
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Company</h3>
            <ul className="[&_li_a]:text-muted-foreground [&_li_a]:hover:text-foreground space-y-2 [&_li_a]:block [&_li_a]:text-sm [&_li_a]:transition-colors [&_li_a]:hover:underline">
              <li>
                <Link href="https://absmach.eu" target="_blank">
                  Abstract Machines
                </Link>
              </li>
              <li>
                <Link
                  href="https://matrix.to/#/#absmach:matrix.org"
                  target="_blank"
                >
                  Community Chat
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.absmach.eu/blog/?category=hardware"
                  target="_blank"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="mailto:info@absmach.eu">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Stay updated with the latest news and updates from Abstract
              Machines Hardware.
            </p>
            <div className="flex space-x-2">
              <InputGroup>
                <InputGroupInput type="email" placeholder="Your email" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    variant="secondary"
                    aria-label="Subscribe to newsletter"
                  >
                    <span className="hidden sm:inline" aria-hidden="true">
                      Subscribe
                    </span>
                    <SendIcon className="inline sm:hidden" aria-hidden="true" />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <p className="text-muted-foreground text-xs">
              141 Quai de Valmy, 75010 Paris, France
            </p>
          </div>
        </div>
        <Separator className="lg:mt-10" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <div className="text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Abstract Machines. All rights
            reserved.
            <span className="mx-2">|</span>
            Licensed under{" "}
            <Link
              href="https://github.com/absmach/s0/blob/main/LICENSE"
              target="_blank"
              className="hover:underline"
            >
              Apache-2.0
            </Link>
          </div>
          <div className="flex gap-4 text-xs">
            <Link
              href="https://www.absmach.eu/terms/"
              target="_blank"
              className="hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.absmach.eu/privacy/"
              target="_blank"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.absmach.eu/imprint/"
              target="_blank"
              className="hover:underline"
            >
              Imprint
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground pt-4">
          <p>
            This work has been partially supported by the{" "}
            <Link
              href="https://elasticproject.eu/"
              target="_blank"
              className="hover:underline"
            >
              ELASTIC project
            </Link>
            , which received funding from the{" "}
            <Link
              href="https://smart-networks.europa.eu/"
              target="_blank"
              className="hover:underline"
            >
              Smart Networks and Services Joint Undertaking
            </Link>{" "}
            (SNS JU) under the European Union&apos;s{" "}
            <Link
              href="https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en"
              target="_blank"
              className="hover:underline"
            >
              Horizon Europe
            </Link>{" "}
            research and innovation programme under{" "}
            <Link
              href="https://cordis.europa.eu/project/id/101139067"
              target="_blank"
              className="hover:underline"
            >
              Grant Agreement No. 101139067
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
