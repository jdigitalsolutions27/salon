import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxeglow-salon.example"),
  title: {
    default: "LuxeGlow Salon | Premium Hair, Skin, Nails & Beauty",
    template: "%s | LuxeGlow Salon",
  },
  description:
    "LuxeGlow Salon delivers premium salon services with licensed stylists, hygienic care, and elegant results. Book your appointment online in minutes.",
  openGraph: {
    title: "LuxeGlow Salon",
    description:
      "Premium hair, skin, and beauty services in a clean, high-end salon space. Book online in minutes.",
    url: "https://luxeglow-salon.example",
    siteName: "LuxeGlow Salon",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Luxe salon interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-[#f8f6f3] text-[#1f1a17] antialiased`}>
        {children}
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "16px",
            },
          }}
        />
      </body>
    </html>
  );
}
