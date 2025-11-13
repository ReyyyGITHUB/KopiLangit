import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import MenuSection from "../components/Menu/MenuSection";
import TestimonialSection from "../components/Testimoni/TestimonialSection";
import Footer from "../components/layout/Footer/Footer";

export default function Base() {
  return (
    <div>
      <div className="flex flex-col justify-center bg-linear-180 from-[#FAF3E0] to-[#EAD7C0] w-screen">
        {/* navbar */}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
}
