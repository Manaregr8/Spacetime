import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { BookingProvider } from "@/context/BookingContext";
import Script from "next/script";
const BookingModal = dynamic(() => import("@/components/BookingModal"), { ssr: true });


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});


export const metadata = {
  title: "Spacetime | Premium Coworking & Managed Office Spaces",
  description:
    "Premium coworking spaces and managed offices in Delhi. Curated sanctuaries for builders and entrepreneurs with hospitality-first service and design that elevates productivity.",
  keywords: "coworking space Delhi, managed office, private office Delhi, virtual office, premium coworking, office space NCR",
  canonical: "https://www.myspacetime.in",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: "index, follow",
  },
  applicationName: "Spacetime",
  publisher: "Spacetime Management Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.myspacetime.in",
    siteName: "Spacetime",
    title: "Spacetime | Premium Coworking & Managed Office Spaces",
    description: "Premium coworking spaces and managed offices in Delhi. Curated sanctuaries for builders and entrepreneurs.",
    images: [
      {
        url: "https://www.myspacetime.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Spacetime - Premium Coworking Spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Spacetime",
    creator: "@Spacetime",
    title: "Spacetime | Premium Coworking Spaces",
    description: "Premium coworking and managed offices in Delhi NCR.",
  },
  icons: {
    icon: "/favicon_io%20(1)/favicon.ico",
    shortcut: "/favicon_io%20(1)/favicon-32x32.png",
    apple: "/favicon_io%20(1)/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/favicon_io%20(1)/site.webmanifest" },
    ],
  },
  alternates: {
    canonical: "https://www.myspacetime.in",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spacetime",
    url: "https://www.myspacetime.in",
    logo: "https://www.myspacetime.in/logo.png",
    description: "Premium coworking spaces and managed offices in Delhi NCR.",
    sameAs: [
      "https://in.linkedin.com/company/spacetimedelhi",
      "https://instagram.com/spacetime_delhi",
      "https://facebook.com/SpacetimeDelhi",
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-98184-50490",
      email: "amit@myspacetime.in",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Delhi",
        areaServed: "Greater Kailash, Saket, NSIC Okhla, Sarita Vihar, Connaught Place, Panchsheel Enclave",
      },
    ],
    availableService: [
      { "@type": "Service", name: "Coworking Desk" },
      { "@type": "Service", name: "Dedicated Seat" },
      { "@type": "Service", name: "Private Office" },
      { "@type": "Service", name: "Managed Office" },
      { "@type": "Service", name: "Virtual Office" },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
           {/* 2. Move scripts to the bottom of <body> and use the <Script> component */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="https://files.bpcontent.cloud/2026/06/11/09/20260611091437-U4TQ6V73.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
