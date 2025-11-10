import HeroTitle from "./HeroTitle";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroBanner from "./HeroBanner";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center text-center px-6 md:px-12 py-24 md:py-40 space-y-10"
      style={{
        backgroundColor: "#FAF3E0",
        color: "#2C2C2C",
      }}
    >
      <HeroTitle />
      <HeroCTAButtons />
      <HeroBanner />
    </section>
  );
}
