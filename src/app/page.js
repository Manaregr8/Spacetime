import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import HeroSection from "@/components/HeroSection";

// Dynamically import below-the-fold components to reduce initial JS payload and TBT
const OurSpaces = dynamic(() => import("@/components/OurSpaces"));
const VirtualOffice = dynamic(() => import("@/components/VirtualOffice"));
const MonthlyEvents = dynamic(() => import("@/components/MonthlyEvents"));
const WhySpacetime = dynamic(() => import("@/components/WhySpacetime"));
const OurAddresses = dynamic(() => import("@/components/OurAddresses"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const TheExperience = dynamic(() => import("@/components/TheExperience"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const LanyardSection = dynamic(() => import("@/components/LanyardSection"));
const InvitationForm = dynamic(() => import("@/components/InvitationForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection />
      <OurSpaces />
      <VirtualOffice />

      <WhySpacetime />
      <OurAddresses />
      <TheExperience />

      <MonthlyEvents />
      <Testimonials />


      <LanyardSection />
      <FAQSection />
      <InvitationForm />
      <Footer />
    </>
  );
}
