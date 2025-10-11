'use client';

import AboutHeroSection from "@/components/AboutHeroSection";
import ServiceCard from "@/components/ContactUsDetails";
import GetInTouch from "@/components/ContactUsGetInTouch";
import LocationMap from "@/components/LocationMap";

export default function ContactUs() {

  return (
    <>
    <AboutHeroSection head={"Contact Us"} text={"Let’s turn solutions into action!"} image={"/images/contactus.jpg"}></AboutHeroSection>
    <ServiceCard></ServiceCard>
    <GetInTouch></GetInTouch>
    <LocationMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0004674743873!2d82.53558489999999!3d25.151800499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398feb16520dbed5%3A0xcdf9d4e5cd5da781!2sGyanee%20Services!5e1!3m2!1sen!2sin!4v1760185794232!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </>
  );
}

// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3102.7520438122815!2d77.04374!3d28.405808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22921e449cc3%3A0x4f551be9a83b51b0!2s58%2C%20Badshahpur%20Sohna%20Rd%20Hwy%2C%20Block%20W%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e1!3m2!1sen!2sin!4v1759569355644!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>