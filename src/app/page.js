import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import HeroSection from "@/components/HeroSection";
import OurSpaces from "@/components/OurSpaces";
import VirtualOffice from "@/components/VirtualOffice";
import MonthlyEvents from "@/components/MonthlyEvents";
import WhySpacetime from "@/components/WhySpacetime";
import OurAddresses from "@/components/OurAddresses";
import Testimonials from "@/components/Testimonials";
import TheExperience from "@/components/TheExperience";
import FAQSection from "@/components/FAQSection";
import LanyardSection from "@/components/LanyardSection";
import InvitationForm from "@/components/InvitationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection />
      <OurSpaces />
      <VirtualOffice />
      <MonthlyEvents />
      <WhySpacetime />
      <OurAddresses />
      <Testimonials />
      <TheExperience />
      <LanyardSection />
      <FAQSection />
      <InvitationForm />
      <Footer />
    </>
  );
}
