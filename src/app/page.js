"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import HeroSection from "@/components/HeroSection";

// Dynamically import below-the-fold components
// We use ssr: false for the heaviest ones to move them completely out of the critical path
const OurSpaces = dynamic(() => import("@/components/OurSpaces"));
const VirtualOffice = dynamic(() => import("@/components/VirtualOffice"));
const MonthlyEvents = dynamic(() => import("@/components/MonthlyEvents"));
const WhySpacetime = dynamic(() => import("@/components/WhySpacetime"));
const OurAddresses = dynamic(() => import("@/components/OurAddresses"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const TheExperience = dynamic(() => import("@/components/TheExperience"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const LanyardSection = dynamic(() => import("@/components/LanyardSection"), { ssr: false });
const InvitationForm = dynamic(() => import("@/components/InvitationForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const [showDeferred, setShowDeferred] = useState(false);

  useEffect(() => {
    // To kill TBT, we wait until the loader is completely gone.
    // This ensures the initial "entrance" frame is 100% smooth.
    const handleLoaderGone = () => {
      const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 500));
      idleCallback(() => {
        setShowDeferred(true);
      });
    };

    window.addEventListener("loader-gone", handleLoaderGone);
    
    // Safety fallback: if for some reason the event doesn't fire
    const timer = setTimeout(() => setShowDeferred(true), 4000);

    return () => {
      window.removeEventListener("loader-gone", handleLoaderGone);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection />
      
      {/* 
        By deferring these components, we ensure the main thread is 100% free
        during the critical first 1-2 seconds of page load.
      */}
      {showDeferred && (
        <>
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
      )}
    </>
  );
}
