import { useState } from "react";
import { Icon } from "@iconify/react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang Kami" },
    { id: "menu", label: "Menu Kopi" },
    { id: "testimonials", label: "Cerita Pelanggan" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm transition-all"
      style={{ backgroundColor: "#FAF3E0E6" }} // cream + sedikit transparansi
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Logo === */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/coffe/kopi_langit.png"
            alt="Logo Kopi Langit"
            className="w-[182px] h-[52px] object-contain"
          />
          <h1
            className="font-heading text-2xl font-semibold"
            style={{ color: "#2C2C2C" }}
          ></h1>
        </div>

        {/* === Desktop Nav === */}
        <div className="hidden md:flex items-center gap-8 font-normal poppins text-[16px]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors duration-200 cursor-pointer"
              style={{
                color: "#2C2C2C",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#8B5E3C")}
              onMouseLeave={(e) => (e.target.style.color = "#2C2C2C")}
            >
              {link.label}
            </a>
          ))}

          <button
            className="ml-4 rounded-full font-brand text-[16px] transition-all duration-300 shadow-sm poppins"
            style={{
              backgroundColor: "#8B5E3C",
              color: "#FFFFFF",
              padding: "12px 24px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#A47148")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#8B5E3C")}
          >
            Ngobrol Yuk
          </button>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden"
          style={{ color: "#2C2C2C" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon={isOpen ? "mdi:close" : "mdi:menu"}
            width="26"
            height="26"
          />
        </button>
      </div>

      {/* === Mobile Menu === */}
      {isOpen && (
        <div
          className="md:hidden border-t flex flex-col items-center py-6 gap-4 font-body transition-all duration-300"
          style={{
            backgroundColor: "#FAF3E0F2",
            borderColor: "#EAD7C0",
            color: "#2C2C2C",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors duration-200 cursor-pointer"
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => (e.target.style.color = "#8B5E3C")}
              onMouseLeave={(e) => (e.target.style.color = "#2C2C2C")}
            >
              {link.label}
            </a>
          ))}

          <button
            className="mt-2 rounded-full font-brand text-[15px] transition-all duration-300 shadow-sm"
            style={{
              backgroundColor: "#8B5E3C",
              color: "#FFFFFF",
              padding: "8px 20px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#A47148")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#8B5E3C")}
          >
            Ngobrol Yuk ☕
          </button>
        </div>
      )}
    </nav>
  );
}
