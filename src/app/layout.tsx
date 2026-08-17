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
  title: "360 IA Studio | Soluciones Digitales para Emprendedores",
  description:
    "Creamos soluciones digitales para emprendedores, profesionales y negocios que quieren verse más profesionales, atraer más consultas y crecer online. Diseño web, automatización, marketing digital y más.",
  keywords: [
    "360 IA Studio",
    "diseño web profesional",
    "automatización de procesos",
    "marketing digital",
    "logos e identidad visual",
    "WhatsApp Business",
    "Google Business",
    "soluciones digitales",
    "emprendedores",
    "negocios digitales",
    "presencia online",
  ],
  authors: [{ name: "360 IA Studio" }],
  creator: "360 IA Studio",
  publisher: "360 IA Studio",
  metadataBase: new URL("https://www.360iastudio.com.ar"),
  icons: {
    icon: "/logo-360-ia-studio.png",
    shortcut: "/logo-360-ia-studio.png",
    apple: "/logo-360-ia-studio.png",
  },
  openGraph: {
    title: "360 IA Studio | Soluciones Digitales para Emprendedores",
    description:
      "Creamos soluciones digitales para emprendedores, profesionales y negocios que quieren verse más profesionales, atraer más consultas y crecer online.",
    url: "https://www.360iastudio.com.ar",
    siteName: "360 IA Studio",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/logo-360-ia-studio.png",
        width: 1200,
        height: 630,
        alt: "360 IA Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360 IA Studio | Soluciones Digitales",
    description:
      "Creamos soluciones digitales para emprendedores, profesionales y negocios que quieren crecer online.",
    images: ["/logo-360-ia-studio.png"],
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