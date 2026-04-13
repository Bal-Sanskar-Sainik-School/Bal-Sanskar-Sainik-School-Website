import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balsansarsainikschool.com"),
  title: "Bal Sansar Sainik School | Jeolikot, Nainital",
  description:
    "Premier Sainik school in Jeolikot, Nainital offering Classes 1–8 with military discipline, academic excellence, and holistic development in the heart of the Himalayas.",
  keywords: [
    "Sainik School",
    "Jeolikot",
    "Nainital",
    "Military School",
    "U.K Board School",
    "Bal Sansar",
    "Uttarakhand School",
    "Best School Nainital",
    "Classes 1 to 8",
    "Boarding School Nainital",
  ],
  authors: [{ name: "Bal Sansar Sainik School" }],
  openGraph: {
    title: "Bal Sansar Sainik School | Jeolikot, Nainital",
    description:
      "Premier Sainik school in Jeolikot, Nainital offering Classes 1–8 with military discipline, academic excellence, and holistic development.",
    type: "website",
    locale: "en_IN",
    siteName: "Bal Sansar Sainik School",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Bal Sansar Sainik School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bal Sansar Sainik School | Jeolikot, Nainital",
    description:
      "Premier Sainik school in Jeolikot, Nainital offering Classes 1–8 with military discipline, academic excellence, and holistic development.",
    images: ["/images/logo/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden w-full relative">
        <Navbar />
        <main className="pt-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
