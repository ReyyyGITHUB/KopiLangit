import { Icon } from "@iconify/react";
import bannerImage from "/assets/images/coffe/coffe_thumbnail.png"; // pastikan path ini sesuai struktur proyek lo

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
      {/* === Hero Title === */}
      <h1
        className="font-heading montserrat text-4xl md:text-6xl font-semibold max-w-[900px] leading-snug md:leading-tight"
        style={{ color: "#2C2C2C" }}
      >
        Nikmati Secangkir Kehangatan di Setiap Seduhan
      </h1>

      {/* === Subtitle === */}
      <p
        className="font-normal opensans text-lg md:text-xl max-w-[720px] leading-8 md:leading-9"
        style={{
          color: "#5C4938",
          letterSpacing: "0.3px",
        }}
      >
        Dari biji pilihan hingga ke meja Anda — kami hadirkan rasa yang menenangkan.
      </p>

      {/* === CTA Buttons === */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          className="rounded-full font-brand px-8 py-4 text-base font-medium transition-all duration-300 shadow-md"
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
          className="rounded-full font-brand px-8 py-3 text-base font-medium border transition-all duration-300"
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

      {/* === Decorative Banner (Replacing Steam Icon) === */}
      <div
        className="w-full mt-20 flex flex-col md:flex-row items-center justify-center rounded-2xl shadow-md overflow-hidden max-w-[1047px]"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
        }}
      >
        {/* Left Text Section */}
        <div className="flex flex-col justify-center items-start p-10 md:w-1/2 text-left gap-8">
          <h2
            className="font-body text-[28px] md:text-[32px] leading-snug"
            style={{
              color: "#2C2C2C",
              maxWidth: "457px",
            }}
          >
            Temukan Cita Rasa Baru dari Setiap Varian Kopi Kami ☕
          </h2>

          <button
            className="rounded-full font-brand px-8 py-3 text-base font-medium border transition-all duration-300"
            style={{
              color: "#A47148",
              borderColor: "#A47148",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#A47148";
              e.target.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#A47148";
            }}
          >
            Jelajahi Menu
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={bannerImage}
            alt="Kopi Langit Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
