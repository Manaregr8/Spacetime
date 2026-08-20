import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/CareersHero";
import CareersBenefits from "@/components/CareersBenefits";
import CareersPositions from "@/components/CareersPositions";

export const metadata = {
  title: "Careers | Spacetime — Shape the future of work",
  description: "Join Spacetime and help us build the next generation of premium workspaces and communities across India.",
  keywords: "careers, jobs, spacetime, coworking, workspace, hiring, community manager, intern",
};

export default function CareersPage() {
  return (
    <>
      <Navbar alwaysDark={true} />
      
      <main>
        <CareersHero />
        <CareersBenefits />
        <CareersPositions />
      </main>

      <Footer />
    </>
  );
}
