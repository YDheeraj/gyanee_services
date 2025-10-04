'use client';

import AboutHeroSection from "@/components/AboutHeroSection";
import ServiceCards from "@/components/ServiceCards";

export default function Services() {

  return (
    <>
      <AboutHeroSection head={"Our Services"} text={"Let’s turn solutions into action!"} image={"/images/remote.jpg"}></AboutHeroSection>
      <ServiceCards></ServiceCards>
    </>
  );
}