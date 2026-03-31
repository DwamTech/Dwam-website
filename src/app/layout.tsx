import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة دوام للبرمجيات والأعمال التقنية | تقنية بلا حدود",
  description: "منصة خدمات وحلول برمجية وإبداعية باحترافية وعصرية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="" />
        <link rel="dns-prefetch" href="//prod.spline.design" />
      </head>
      <body className={`${cairo.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
