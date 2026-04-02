import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurSpaces from "@/components/OurSpaces";
import VirtualOffice from "@/components/VirtualOffice";
import WhySpacetime from "@/components/WhySpacetime";
import OurAddresses from "@/components/OurAddresses";
import TheExperience from "@/components/TheExperience";
import LanyardSection from "@/components/LanyardSection";
import InvitationForm from "@/components/InvitationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurSpaces />
      <VirtualOffice />
      <WhySpacetime />
      <OurAddresses />
      <TheExperience />
      <LanyardSection />
      <InvitationForm />
      <Footer />
    </>
  );
}
