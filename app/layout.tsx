import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import StructuredData from "@/components/StructuredData";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

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
  title: {
    default: "Bal Sansar Sainik School Jeolikot | Best State Board School in Nainital Uttarakhand",
    template: "%s | Bal Sansar Sainik School Jeolikot"
  },
  description:
    "Best school in Jeolikot, Nainital. Bal Sansar Sainik School is a top Uttarakhand State Board private school (not military/army) offering Classes 1-8 in Jeolikot with 100% results, experienced teachers, modern facilities. Admissions open near Nainital, Bhowali.",
  keywords: [
    "Bal Sansar Sainik School",
    "school in Jeolikot",
    "best school Jeolikot",
    "Jeolikot school",
    "school near Nainital",
    "Nainital school",
    "Uttarakhand State Board School",
    "UK Board School Nainital",
    "Private School Jeolikot",
    "Best School Nainital",
    "school in Nainital",
    "top school Uttarakhand",
    "Classes 1 to 8 Nainital",
    "Classes 1 to 8 Jeolikot",
    "Day School Nainital",
    "Quality Education Jeolikot",
    "Disciplined School Nainital",
    "school near Bhowali",
    "Himalayan School",
    "State Board Uttarakhand",
    "Primary School Nainital",
    "Middle School Nainital",
    "admission in Jeolikot",
    "school admission Nainital",
    "UDISE 05110307811",
  ],
  authors: [{ name: "Bal Sansar Sainik School" }],
  creator: "Bal Sansar Sainik School",
  publisher: "Bal Sansar Sainik School",
  category: "Education",
  openGraph: {
    title: "Bal Sansar Sainik School | Best School in Jeolikot, Nainital",
    description:
      "Top Uttarakhand State Board school in Jeolikot, Nainital offering Classes 1-8. Not a military school. 100% results, modern facilities, experienced faculty.",
    type: "website",
    locale: "en_IN",
    url: "https://balsansarsainikschool.com",
    siteName: "Bal Sansar Sainik School Jeolikot",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Bal Sansar Sainik School Logo - Best School in Jeolikot Nainital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bal Sansar Sainik School | Best School in Jeolikot, Nainital",
    description:
      "Top State Board school in Jeolikot, Nainital. Classes 1-8. Not a military school. Admissions open.",
    images: ["/images/logo/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "0a7ac891375b7c60",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} overflow-x-hidden`}>
      <head>
        <StructuredData />
        <LocalBusinessSchema />
      </head>
      <body className="antialiased overflow-x-hidden w-full relative">
        <Navbar />
        <main className="pt-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
