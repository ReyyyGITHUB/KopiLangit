import { useRef, useState } from "react";

export default function MenuSection() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragData = useRef({
    startX: 0,
    scrollLeft: 0,
    pointerId: null,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });
  const momentumFrame = useRef(null);

  const startMomentumScroll = () => {
    if (!scrollContainerRef.current) return;
    const decay = 0.95;
    const step = () => {
      if (!scrollContainerRef.current) return;
      dragData.current.velocity *= decay;
      if (Math.abs(dragData.current.velocity) < 0.1) {
        momentumFrame.current = null;
        return;
      }
      scrollContainerRef.current.scrollLeft -= dragData.current.velocity;
      momentumFrame.current = requestAnimationFrame(step);
    };
    if (momentumFrame.current) cancelAnimationFrame(momentumFrame.current);
    momentumFrame.current = requestAnimationFrame(step);
  };

  const menuItems = [
    {
      name: "Americano",
      price: "Rp 18.000",
      desc: "Hitam pekat dengan cita rasa kuat dan aroma khas biji kopi lokal.",
      img: "/assets/images/menu/americano.jpg",
      waLink:
        "https://wa.me/6281234567890?text=Halo%20KopiLangit,%20saya%20mau%20pesan%20Americano",
    },
    {
      name: "Kopi Langit Latte",
      price: "Rp 22.000",
      desc: "Perpaduan espresso dan susu lembut dengan aroma khas KopiLangit.",
      img: "/assets/images/menu/latte.jpg",
      waLink:
        "https://wa.me/6281234567890?text=Halo%20KopiLangit,%20saya%20mau%20pesan%20Kopi%20Langit%20Latte",
    },
    {
      name: "Cappuccino",
      price: "Rp 20.000",
      desc: "Campuran espresso, susu, dan foam halus dengan sentuhan cokelat bubuk.",
      img: "/assets/images/menu/cappuccino.jpg",
      waLink:
        "https://wa.me/6281234567890?text=Halo%20KopiLangit,%20saya%20mau%20pesan%20Cappuccino",
    },
    {
      name: "Es Kopi Manis",
      price: "Rp 19.000",
      desc: "Kopi dingin khas KopiLangit yang segar dan lembut di lidah.",
      img: "/assets/images/menu/eskopi.jpg",
      waLink:
        "https://wa.me/6281234567890?text=Halo%20KopiLangit,%20saya%20mau%20pesan%20Es%20Kopi%20Manis",
    },
  ];

  return (
    <section
      id="menu"
      className="w-full px-6 md:px-16 py-24 md:py-32 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#FAF3E0",
      }}
    >
      {/* === Heading === */}
      <div className="text-center mb-16 max-w-[1003px]">
        <h2
          className="font-heading montserrat text-[42px] md:text-[48px] font-semibold leading-snug"
          style={{ color: "#3A2F27" }}
        >
          Nikmati varian kopi pilihan kami yang diracik dari biji terbaik
          Indonesia.
        </h2>
        <p
          className="font-body text-[18px] opensans leading-relaxed mt-4"
          style={{ color: "#6B5E51" }}
        >
          Diseduh dengan hati, disajikan untukmu.
        </p>
      </div>

      {/* === Scrollable Card Section === */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-1 w-full max-w-[1300px]"
        style={{
          scrollbarWidth: "none",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: isDragging ? "none" : "auto",
        }}
        onPointerDown={(e) => {
          if (!scrollContainerRef.current) return;
          if (momentumFrame.current) {
            cancelAnimationFrame(momentumFrame.current);
            momentumFrame.current = null;
          }
          setIsDragging(true);
          const containerLeft =
            scrollContainerRef.current.getBoundingClientRect().left;
          dragData.current = {
            startX: e.clientX - containerLeft,
            scrollLeft: scrollContainerRef.current.scrollLeft,
            pointerId: e.pointerId,
            lastX: e.clientX,
            lastTime: performance.now(),
            velocity: 0,
          };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
          setIsDragging(false);
          startMomentumScroll();
        }}
        onPointerLeave={() => {
          if (isDragging) {
            setIsDragging(false);
            startMomentumScroll();
          }
        }}
        onPointerCancel={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
          setIsDragging(false);
          startMomentumScroll();
        }}
        onPointerMove={(e) => {
          if (!isDragging || !scrollContainerRef.current) return;
          e.preventDefault();
          const containerLeft =
            scrollContainerRef.current.getBoundingClientRect().left;
          const x = e.clientX - containerLeft;
          const walk = x - dragData.current.startX;
          scrollContainerRef.current.scrollLeft =
            dragData.current.scrollLeft - walk;
          const now = performance.now();
          const deltaX = e.clientX - dragData.current.lastX;
          const deltaTime = now - dragData.current.lastTime || 1;
          dragData.current.velocity = (deltaX / deltaTime) * 15;
          dragData.current.lastX = e.clientX;
          dragData.current.lastTime = now;
        }}
      >
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-[387px] h-[454px] bg-white rounded-[16px] shadow-[0px_3px_8px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col justify-between"
          >
            {/* Gambar */}
            <div className="w-full h-[220px] overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-[12px]"
              />
            </div>

            {/* Konten */}
            <div className="flex flex-col justify-between p-6 flex-grow">
              {/* Nama & Harga */}
              <div className="flex items-start justify-between mb-2">
                <h4
                  className="font-[Poppins] text-[18px] font-semibold"
                  style={{ color: "#000000" }}
                >
                  {item.name}
                </h4>
                <span
                  className="font-[Poppins] text-[18px] font-semibold"
                  style={{ color: "#000000" }}
                >
                  {item.price}
                </span>
              </div>

              {/* Deskripsi */}
              <p
                className="font-[Open Sans] text-[14px] leading-relaxed mb-6"
                style={{ color: "#6B5E51" }}
              >
                {item.desc}
              </p>

              {/* Tombol WA */}
              <a
                href={item.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white font-[Poppins] text-[14px] rounded-full py-[10px] px-[16px] transition-all duration-300"
                style={{
                  backgroundColor: "#8B5E3C",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#A47148")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#8B5E3C")
                }
              >
                <img
                  src="/assets/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Pesan via WA
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* === CTA Bawah === */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <h3
          className="font-heading text-[24px] font-medium text-center"
          style={{ color: "#2C2C2C" }}
        >
          Mau lihat semua menu kami?
        </h3>
        <button
          className="rounded-full font-brand text-[16px] px-8 py-3 border transition-all duration-300 shadow-sm"
          style={{
            borderColor: "#8B5E3C",
            color: "#8B5E3C",
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
          Click untuk lihat menu lengkap
        </button>
      </div>
    </section>
  );
}
