import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { BookingProvider } from "@/context/BookingContext";

const BookingModal = dynamic(() => import("@/components/BookingModal"), { ssr: true });


const poppins = Poppins({
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
    icon: "/g2.webp",
    apple: "/g2.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
