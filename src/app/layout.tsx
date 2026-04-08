import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const rubik = Rubik({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

const metadataBase = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase,
  title: "Abstract Machines Hardware - Modular IoT Gateway Solutions",
  description:
    "Open-source IoT gateway hardware for edge computing. S0 module and Base Board for smart metering, industrial IoT, and edge AI applications.",
  authors: [{ name: "Abstract Machines", url: "https://absmach.eu" }],
  keywords: [
    "S0 Gateway",
    "S1 Gateway",
    "Base Board",
    "IoT Gateway",
    "Edge Computing",
    "Hardware",
    "Open Source",
    "ESP32-C6",
    "RISC-V",
    "Smart Metering",
    "Industrial IoT",
    "Zephyr RTOS",
    "Wireless M-Bus",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Abstract Machines Hardware",
  },

  openGraph: {
    type: "website",
    title: "Abstract Machines Hardware - Modular IoT Gateway Solutions",
    description:
      "Open-source IoT gateway hardware for edge computing. S0 module and Base Board for smart metering, industrial IoT, and edge AI applications.",
    url: SITE_URL,
    siteName: "Abstract Machines Hardware",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        secureUrl: `${SITE_URL}/opengraph-image.png`,
        alt: "Abstract Machines Hardware",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abstract Machines Hardware - Modular IoT Gateway Solutions",
    description:
      "Open-source IoT gateway hardware for edge computing. S0 module and Base Board for smart metering, industrial IoT, and edge AI applications.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        secureUrl: `${SITE_URL}/opengraph-image.png`,
        alt: "Abstract Machines Hardware",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Abstract Machines Hardware",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Open-source modular IoT gateway hardware for smart metering, industrial automation, and edge computing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "141 Quai de Valmy",
    addressLocality: "Paris",
    postalCode: "75010",
    addressCountry: "FR",
  },
  sameAs: ["https://github.com/absmach/s0", "https://absmach.eu"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@absmach.eu",
    contactType: "sales",
    areaServed: "EU",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abstract Machines Hardware",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/docs?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={rubik.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema markup, not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
