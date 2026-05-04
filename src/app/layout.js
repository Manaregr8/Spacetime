import { Cal_Sans, Manrope, Be_Vietnam_Pro, Tsukimi_Rounded } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/BookingModal";

const tsukimi = Tsukimi_Rounded({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tsukimi",
  display: "swap",
});

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata = {
  title: "Spacetime | Premium Coworking Spaces",
  description:
    "Curated sanctuaries for those who build. Hospitality-first. Design that elevates.",
  icons: {
    icon: "/g2.webp",
    apple: "/g2.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${calSans.variable} ${manrope.variable} ${beVietnamPro.variable} ${tsukimi.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
