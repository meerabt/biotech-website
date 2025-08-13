import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bio-tech Technical Services | Medical Equipment Repair & Service",
  description:
    "Bio-tech Technical Services provides high-quality medical, laboratory, and industrial equipment repair, maintenance, and sales services in Bangalore, Karnataka, India.",
  keywords: [
    "medical equipment repair",
    "laboratory equipment service",
    "industrial equipment maintenance",
    "medical devices",
    "Bio-tech Technical Services",
    "Karnataka medical services",
    "Lab equipment",
    "Bangalore medical equipments",
    "Best medical equipment services",
    "Best science lab equipments",
    "Bio tech technical services",
  ],
  authors: [{ name: "Bio-tech Technical Services" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://biotechtechnical.com",
  },
  openGraph: {
    title:
      "Bio-tech Technical Services | Medical Equipment Repair & Service | Laboratary Equipment Repair & Service ",
    description:
      "Expert repair and maintenance services for medical, laboratory, and industrial equipment in Bangalore, Karnataka.",
    url: "https://biotechtechnical.com",
    siteName: "Bio-tech Technical Services",
    images: [
      {
        url: "https://biotechtechnical.com/lab.jpg",
        width: 1200,
        height: 630,
        alt: "Bio-tech Technical Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio-tech Technical Services | Medical Equipment Repair & Service",
    description:
      "Expert repair and maintenance services for medical, laboratory, and industrial equipment.",
    images: ["https://biotechtechnical.com/lab.jpg"],
    creator: "@YourTwitterHandle",
  },
  metadataBase: new URL("https://biotechtechnical.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="xhhkl7flUMFA2KmTf3GBb-pLAxIZfiYI6oQSejwlLr4"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
      </head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
