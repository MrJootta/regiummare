import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RegiumMare",
  description: "Empresa de construção e remodelação de imóveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
       <Head>
        <title>Home - RegiumMare</title>
        <meta name="description" content="Welcome to RegiumMare, your trusted partner in construction and renovation." />
        <meta name="keywords" content="construction, renovation, real estate, RegiumMare" />
        <meta name="author" content="RegiumMare" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
