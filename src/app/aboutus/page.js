'use client';

import AboutHeroSection from "@/components/AboutHeroSection";
import AboutUsOurMission from "@/components/AboutUsOurMisson";
import AboutWhoAreWe from "@/components/AboutWhoWeAre";

export default function AboutUs() {

  return (
    <>
    <AboutHeroSection head={"Your Home, Our Priority"} text={"Powering Your Home Is Our Mission"}  image={"/images/aboutus_repair.jpg"}></AboutHeroSection>
    <AboutWhoAreWe></AboutWhoAreWe>
    <AboutUsOurMission></AboutUsOurMission>
    </>
  );
}
