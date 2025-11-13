import { Icon } from "@iconify/react";

export default function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <button
        className="rounded-full font-brand px-8 py-4 text-[18px] poppins font-medium transition-all duration-300 shadow-md"
        style={{
          backgroundColor: "#8B5E3C",
          color: "#FFFFFF",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#A47148")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#8B5E3C")}
      >
        Coba Sekarang
      </button>

      <button
        className="rounded-full font-brand px-8 py-4 text-[18px] poppins font-medium border transition-all duration-300"
        style={{
          backgroundColor: "transparent",
          color: "#8B5E3C",
          borderColor: "#8B5E3C",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#8B5E3C";
          e.target.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#8B5E3C";
        }}
      >
        <Icon icon="mdi:menu-coffee" className="inline-block mr-2" />
        Lihat Menu
      </button>
    </div>
  );
}
