import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Importamos el nuevo Provider
import SmoothScrolling from "@/components/SmoothScrolling";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const veryVogue = localFont({
  src: [
    {
      path: '../fonts/very-vogue-text.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/very-vogue-text-italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-very-vogue',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Eventoclic - El sistema que organiza a tus invitados",
  description: "Confirmaciones, códigos únicos y acceso con QR en un solo panel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${veryVogue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Envolvemos la app con Lenis */}
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}