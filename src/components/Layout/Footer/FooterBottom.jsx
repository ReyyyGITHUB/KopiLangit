import FooterBrand from "./FooterBrand";
import FooterNavLinks from "./FooterNavLinks";
import FooterSocialIcons from "./FooterSocialIcons";

export default function FooterBottom() {
  return (
    <div className="w-full border-t border-[#A47148] mt-[42px] py-[40px] flex flex-col md:flex-row items-center justify-between px-[120px] gap-10">
      <FooterBrand />
      <div className="flex flex-col items-end gap-8">
        <FooterNavLinks />
        <FooterSocialIcons />
      </div>
    </div>
  );
}
