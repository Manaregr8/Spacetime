import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import VirtualOfficeHero from "@/components/VirtualOfficeHero";

// Defer below-the-fold sections for a fast initial load
const VirtualOfficePlans = dynamic(() => import("@/components/VirtualOfficePlans"));
const VirtualOfficeWhy = dynamic(() => import("@/components/VirtualOfficeWhy"));
const VirtualOfficeSteps = dynamic(() => import("@/components/VirtualOfficeSteps"));
const VirtualOfficeCentres = dynamic(() => import("@/components/VirtualOfficeCentres"));
const InvitationForm = dynamic(() => import("@/components/InvitationForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "Virtual Office | Spacetime — Premium Business Addresses",
  description:
    "Get a premium business address with Spacetime Virtual Office. Plans starting at ₹1,099/month. GST & company registration-ready documentation in under 15 minutes.",
  keywords:
    "virtual office, virtual office India, business address, GST registration address, company registration, coworking, Spacetime virtual office",
  alternates: {
    canonical: "https://www.myspacetime.in/virtual-office",
  },
  openGraph: {
    type: "website",
    url: "https://www.myspacetime.in/virtual-office",
    title: "Virtual Office | Spacetime — Premium Business Addresses",
    description:
      "Plans starting at ₹1,099/month. GST & company registration-ready. Documentation in under 15 minutes.",
    images: [
      {
        url: "https://www.myspacetime.in/homebannerImages/Enhance_office_image_202604020030.webp",
        width: 1200,
        height: 630,
        alt: "Spacetime Virtual Office",
      },
    ],
  },
};

export default function VirtualOfficePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Spacetime Virtual Office",
    description:
      "Premium virtual office address for business registration, GST filing, and professional correspondence across India.",
    brand: {
      "@type": "Brand",
      name: "Spacetime",
    },
    url: "https://www.myspacetime.in/virtual-office",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "1099",
      offerCount: "3",
    },
  };

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar alwaysDark={true} />

      {/* Section 1: Hero + Lead Capture Form */}
      <VirtualOfficeHero />

      {/* Section 2: What is Virtual Office + Pricing Plans */}
      <VirtualOfficePlans />

      {/* Section 3: Why Choose Spacetime Virtual Office */}
      <VirtualOfficeWhy />

      {/* Section 4: 4-Step Registration Process + Trust Logos */}
      <VirtualOfficeSteps />

      {/* Section 5: Browse Centres Across India */}
      <VirtualOfficeCentres />

      {/* Section 6: Contact Form */}
      <InvitationForm />

      {/* Footer */}
      <Footer />
    </>
  );
}
