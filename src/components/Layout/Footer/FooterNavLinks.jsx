import { footerNavLinks } from "./footerData";
import scrollToSection from "../../../utils/scrollToSection";

export default function FooterNavLinks() {
  return (
    <div className="flex items-center justify-center gap-8">
      {footerNavLinks.map(({ label, id, offset }) => (
        <a
          key={label}
          href={`#${id}`}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(id, offset);
          }}
          className="relative poppins text-[#8B5E3C] text-base font-normal transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#A47148] hover:text-[#A47148] hover:after:w-full"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
