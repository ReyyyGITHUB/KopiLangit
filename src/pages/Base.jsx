import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import MenuSection from "../components/MenuSection";

export default function Base() {
  return (
    <div>
      <div className="flex flex-col justify-center bg-linear-180 from-[#FAF3E0] to-[#EAD7C0] w-screen">
        {/* navbar */}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
      </div>
    </div>
  );
}
