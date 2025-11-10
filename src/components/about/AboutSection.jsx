import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-24 md:py-32"
      style={{
        backgroundColor: "#F2E4CA",
        color: "#2C2C2C",
      }}
    >
      <AboutImage />
      <AboutContent />
    </section>
  );
}
