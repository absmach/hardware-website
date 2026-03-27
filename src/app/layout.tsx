import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import type { Metadata } from "next";

const rubik = Rubik({
  subsets: ["latin"],
  style: "normal",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://hardware.absmach.eu";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Abstract Machines Hardware - Modular IoT Gateway Solutions",
  description:
    "Open-source IoT gateway hardware for edge computing. S0 module and Base Board for smart metering, industrial IoT, and edge AI applications.",
  keywords: ["S0", "Base Board", "IoT Gateway", "Hardware", "Open Source"],
  appleWebApp: {
    title: "Abstract Machines Hardware",
  },

  openGraph: {
    type: "website",
    title: "Abstract Machines Hardware - Modular IoT Gateway Solutions",
    description:
      "Open-source IoT gateway hardware for edge computing. S0 module and Base Board for smart metering, industrial IoT, and edge AI applications.",
    url: baseUrl,
    siteName: "Abstract Machines Hardware",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        secureUrl: `${baseUrl}/opengraph-image.png`,
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
        url: `${baseUrl}/opengraph-image.png`,
        secureUrl: `${baseUrl}/opengraph-image.png`,
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
  url: "https://hardware.absmach.eu",
  logo: "https://hardware.absmach.eu/logo.png",
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
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={rubik.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
