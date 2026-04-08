import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
