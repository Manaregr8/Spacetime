import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { BookingProvider } from "@/context/BookingContext";

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
  title: "Spacetime | Premium Coworking Spaces",
  description:
    "Curated sanctuaries for those who build. Hospitality-first. Design that elevates.",
  icons: {
    icon: "/favicon_io%20(1)/favicon.ico",
    shortcut: "/favicon_io%20(1)/favicon-32x32.png",
    apple: "/favicon_io%20(1)/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/favicon_io%20(1)/site.webmanifest" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
