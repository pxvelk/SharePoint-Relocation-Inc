import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phasepointrelocation.ca"),
  title: {
    default: "PhasePoint Relocation | Commercial Relocation & Renovation Support",
    template: "%s | PhasePoint Relocation",
  },
  description:
    "PhasePoint Relocation helps Quebec businesses execute commercial moves, phased transitions, and renovation reinstalls with minimal disruption.",
  openGraph: {
    title: "PhasePoint Relocation | Commercial Relocation & Renovation Support",
    description:
      "Commercial relocation, renovation support, and phased office moves across Quebec with minimal disruption.",
    url: "https://phasepointrelocation.ca",
    siteName: "PhasePoint Relocation",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PhasePoint Relocation - Commercial Relocation & Renovation Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhasePoint Relocation",
    description:
      "Commercial relocation and renovation transition support across Quebec.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
