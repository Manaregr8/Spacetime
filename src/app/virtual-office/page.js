import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import VirtualOfficeHero from "@/components/VirtualOfficeHero";

// Defer below-the-fold sections for a fast initial load
const VirtualOfficePlans = dynamic(() => import("@/components/VirtualOfficePlans"));
const VirtualOfficeWhy = dynamic(() => import("@/components/VirtualOfficeWhy"));
const VirtualOfficeSteps = dynamic(() => import("@/components/VirtualOfficeSteps"));
const VirtualOfficeCentres = dynamic(() => import("@/components/VirtualOfficeCentres"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
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

const virtualFaqs = {
  "Registration & Compliance": [
    {
      q: "Can I use a Virtual Office for company registration?",
      a: "Yes. Eligible Spacetime Virtual Office plans can be used as your registered office address for company incorporation, subject to statutory requirements and document verification."
    },
    {
      q: "Can I register for GST using a Virtual Office?",
      a: "Yes. Our GST registration plans include the documentation required to support GST registration, subject to applicable government regulations."
    },
    {
      q: "Is a Virtual Office legally recognised?",
      a: "Yes. When used in accordance with applicable regulations and documentation requirements, a Virtual Office is a legitimate business solution for eligible registrations."
    },
  ],
  "Documentation & Onboarding": [
    {
      q: "What documents do I need to get started?",
      a: "The required documentation depends on your selected plan and business type. Our team will guide you through the KYC and registration requirements."
    },
    {
      q: "How long does the onboarding process take?",
      a: "In most cases, documentation can be processed in as little as 15 minutes once all required documents have been submitted and verified."
    },
    {
      q: "How do I get started?",
      a: "Choose your preferred plan, share the required documents, complete the agreement, and our team will guide you through the remaining steps."
    },
  ],
  "Services & Benefits": [
    {
      q: "What is included in Spacetime Virtual Office?",
      a: "Depending on your chosen plan, your Virtual Office may include a premium business address, registration support, professional mail handling, and access to meeting rooms and workspace facilities."
    },
    {
      q: "Will I receive business mail at my Virtual Office address?",
      a: "Yes. Mail and courier handling is available in accordance with the services included in your selected plan."
    },
    {
      q: "Can I book meeting rooms whenever I need them?",
      a: "Yes. Virtual Office clients can book meeting rooms and other workplace facilities, subject to availability and applicable charges."
    },
  ],
  "Plans & Growth": [
    {
      q: "Which Virtual Office plan should I choose?",
      a: "Whether you need a business address, GST registration support, or company incorporation documentation, our team can help you select the plan best suited to your requirements."
    },
    {
      q: "Can I upgrade to a physical office later?",
      a: "Absolutely. As your business grows, you can seamlessly upgrade to coworking desks, private cabins, or managed office spaces within the Spacetime network."
    },
    {
      q: "Why choose Spacetime for a Virtual Office?",
      a: "Unlike standalone virtual office providers, Spacetime offers premium commercial addresses backed by professionally managed workspaces, hospitality-led service, and the flexibility to scale into physical office solutions as your business grows."
    },
  ],
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

      {/* Section 7: FAQ */}
      <FAQSection
        customFaqs={virtualFaqs}
        heading="Virtual Office FAQs"
        subheading="Everything you need to know about setting up and managing your Virtual Office with Spacetime."
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
