import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
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
        url: `${baseUrl}/opengraph-image.jpg`,
        secureUrl: `${baseUrl}/opengraph-image.jpg`,
        alt: "Abstract Machines Hardware",
        type: "image/jpeg",
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
        url: `${baseUrl}/opengraph-image.jpg`,
        secureUrl: `${baseUrl}/opengraph-image.jpg`,
        alt: "Abstract Machines Hardware",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
