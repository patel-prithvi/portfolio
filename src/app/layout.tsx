import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prithvi Patel | Full-Stack Software Developer",
  description:
    "Portfolio of Prithvi Patel — Software Developer specializing in full-stack web development with Django, Flask, React, Node.js, and Java.",
  keywords: [
    "Prithvi Patel",
    "Software Developer",
    "Full-Stack Developer",
    "React Engineer",
    "Django Engineer",
    "Python Developer",
    "Portfolio",
    "LJIET",
  ],
  authors: [{ name: "Prithvi Patel", url: "https://github.com/patel-prithvi" }],
  verification: {
    google: "1X_EcS7O3xu3inIjEffUNGDfI398sWdMVVcdu833oSs",
  },
  openGraph: {
    title: "Prithvi Patel | Full-Stack Software Developer",
    description:
      "Software Developer specializing in scalable full-stack web applications with Django, Flask, React, and Node.js.",
    type: "website",
    url: "https://github.com/patel-prithvi",
    locale: "en_US",
    siteName: "Prithvi Patel Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

