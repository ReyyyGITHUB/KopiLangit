import { Icon } from "@iconify/react";
import { footerSocialIcons } from "./footerData";

export default function FooterSocialIcons() {
  return (
    <div className="flex flex-row gap-6">
      {footerSocialIcons.map(({ icon, label }) => (
        <div
          key={icon}
          className="
            w-[42px] h-[42px] flex items-center justify-center 
            rounded-full border border-[#8B5E3C] cursor-pointer
            transition-all duration-300 hover:bg-[#8B5E3C]
          "
          aria-label={label}
        >
          <Icon
            icon={icon}
            className="text-[20px] text-[#8B5E3C] transition-all duration-300 hover:text-white"
          />
        </div>
      ))}
    </div>
  );
}
