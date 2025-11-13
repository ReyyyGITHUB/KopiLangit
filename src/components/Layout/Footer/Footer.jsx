import FooterCTA from "./FooterCTA";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full bg-gradient-to-b from-[#FAF3E0] to-[#EAD7C0] flex flex-col items-center justify-center">
        <FooterCTA />
        <FooterBottom />
      </div>
    </footer>
  );
}
