import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FC IA Studio | Soluciones Digitales para Emprendedores",
  description:
    "Creamos soluciones digitales para emprendedores, profesionales y negocios que quieren verse más profesionales, atraer más consultas y crecer online. Diseño web, automatización, marketing digital y más.",
  keywords: [
    "FC IA Studio",
    "diseño web profesional",
    "automatización de procesos",
    "marketing digital",
    "logos e identidad visual",
    "WhatsApp Business",
    "Google Business",
    "soluciones digitales",
    "emprendedores",
    "Franco Carreño",
  ],
  authors: [{ name: "Franco Carreño - FC IA Studio" }],
  icons: {
    icon: "/logo-fc.png",
  },
  openGraph: {
    title: "FC IA Studio | Soluciones Digitales para Emprendedores",
    description:
      "Creamos soluciones digitales para emprendedores, profesionales y negocios que quieren verse más profesionales, atraer más consultas y crecer online.",
    url: "https://fc-iastudio.com",
    siteName: "FC IA Studio",
    type: "website",
    images: [{ url: "/fc-brand.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC IA Studio | Soluciones Digitales",
    description:
      "Creamos soluciones digitales para emprendedores, profesionales y negocios que quieren crecer online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
