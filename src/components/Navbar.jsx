import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import scrollToSection from "../utils/scrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", label: "Beranda", offset: 0 },
    { id: "about", label: "Tentang Kami" },
    { id: "menu", label: "Menu Kopi" },
    { id: "testimonials", label: "Cerita Pelanggan" },
  ];

  const handleNavClick = (event, link) => {
    event.preventDefault();
    scrollToSection(link.id, link.offset);
    setActiveLink(link.id);
    setIsOpen(false);
  };

  // === Scroll spy effect untuk detect link aktif ===
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // sedikit offset biar pas
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const sectionTop = section.offsetTop - (link.offset ?? 80);
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          setActiveLink(link.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm transition-all"
      style={{ backgroundColor: "#FAF3E0E6" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Logo === */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/coffe/kopi_langit.png"
            alt="Logo Kopi Langit"
            className="w-[182px] h-[52px] object-contain"
          />
        </div>

        {/* === Desktop Nav === */}
        <div className="hidden md:flex items-center gap-8 poppins text-[16px] font-normal">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNavClick(event, link)}
              className={`
                relative cursor-pointer transition-all duration-300 group
                ${activeLink === link.id ? "text-[#8B5E3C]" : "text-[#2C2C2C]"}
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-[#8B5E3C] after:transition-all after:duration-300
                group-hover:text-[#8B5E3C] group-hover:after:w-full
                ${activeLink === link.id ? "after:w-full" : ""}
              `}
            >
              {link.label}
            </a>
          ))}

          <button
            className="ml-4 rounded-full poppins text-[16px] font-medium transition-all duration-300 shadow-sm"
            style={{
              backgroundColor: "#8B5E3C",
              color: "#FFFFFF",
              padding: "12px 24px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#A47148")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#8B5E3C")}
            onClick={() => scrollToSection("contact")}
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
          className="md:hidden border-t flex flex-col items-center py-6 gap-4 transition-all duration-300"
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
              onClick={(event) => handleNavClick(event, link)}
              className={`poppins text-[16px] transition-colors duration-300 ${
                activeLink === link.id
                  ? "text-[#8B5E3C] font-medium"
                  : "text-[#2C2C2C]"
              }`}
            >
              {link.label}
            </a>
          ))}

          <button
            className="mt-2 rounded-full poppins text-[15px] transition-all duration-300 shadow-sm"
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
