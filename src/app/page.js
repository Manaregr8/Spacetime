"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
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
  return (
    <>
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
