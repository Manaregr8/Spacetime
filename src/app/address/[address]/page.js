import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import AddressHero from "@/components/AddressHero";
import dynamic from "next/dynamic";
import { getLocationBySlug, getAllSlugs } from "@/data/locations";

// Defer below-the-fold sections same as the homepage pattern
const AddressWorkspace = dynamic(() => import("@/components/AddressWorkspace"));
const AddressFeatures = dynamic(() => import("@/components/AddressFeatures"));
const AddressMoreSolutions = dynamic(() => import("@/components/AddressMoreSolutions"));
const WhySpacetime = dynamic(() => import("@/components/WhySpacetime"));
const TheExperience = dynamic(() => import("@/components/TheExperience"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const LanyardSection = dynamic(() => import("@/components/LanyardSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const InvitationForm = dynamic(() => import("@/components/InvitationForm"));
const Footer = dynamic(() => import("@/components/Footer"));

import { getAddressFeatures } from "@/data/addressFeaturesData";

/**
 * generateStaticParams — pre-renders all known address slugs at build time.
 * Add new slugs in src/data/locations.js and they'll be picked up automatically.
 */
export function generateStaticParams() {
  return getAllSlugs();
}

/**
 * generateMetadata — dynamic SEO metadata per address.
 */
export async function generateMetadata({ params }) {
  const { address } = await params;
  const location = getLocationBySlug(address);

  if (!location) {
    return { title: "Location Not Found | Spacetime" };
  }

  return {
    title: `${location.name} | Spacetime Premium Coworking`,
    description: `${location.tagline}. ${location.meta}. ${location.priceHighlight}. Premium coworking and managed offices by Spacetime.`,
    keywords: `coworking ${location.name}, office space ${location.name}, managed office, Spacetime ${location.name}`,
    alternates: {
      canonical: `https://www.myspacetime.in/address/${address}`,
    },
    openGraph: {
      type: "website",
      url: `https://www.myspacetime.in/address/${address}`,
      title: `${location.name} | Spacetime Premium Coworking`,
      description: `${location.tagline}. ${location.priceHighlight}.`,
      images: [
        {
          url: `https://www.myspacetime.in${location.heroImage}`,
          width: 1200,
          height: 630,
          alt: `Spacetime at ${location.name}`,
        },
      ],
    },
  };
}

/**
 * AddressPage — server component that resolves the slug and renders
 * the full address-specific page using the shared AddressHero component.
 *
 * Route: /address/[address]
 * Examples:
 *   /address/gk2          → Greater Kailash II
 *   /address/saket        → Saket, Westend Marg
 *   /address/mohan-estate → Mohan Estate
 */
export default async function AddressPage({ params }) {
  const { address } = await params;
  const location = getLocationBySlug(address);

  // 404 for unknown slugs
  if (!location) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Spacetime — ${location.name}`,
    description: location.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    url: `https://www.myspacetime.in/address/${location.slug}`,
    image: `https://www.myspacetime.in${location.heroImage}`,
    telephone: "+91-98184-50490",
    priceRange: location.priceHighlight,
  };

  return (
    <>
      {/* Structured data for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar alwaysDark={true} />

      {/* The dynamic hero section — all content driven by `location` data */}
      <AddressHero location={location} />

      {/* Section 2: Find Your Ideal Workspace — tabs + included card */}
      <AddressWorkspace location={location} />

      {/* Section 3: Dynamic Features */}
      <AddressFeatures location={location} />

      {/* Section 4: More Solutions */}
      <AddressMoreSolutions location={location} />

      {/* Dynamic FAQs */}
      <FAQSection customFaqs={getAddressFeatures(location.slug)?.faqs} />

      {/* Shared contact form and footer */}
      <InvitationForm />
      <Footer />
    </>
  );
}