import bannerImage from "/assets/images/coffe/coffe_thumbnail.png";

export default function HeroBanner() {
  return (
    <div
      className="w-full mt-20 flex flex-col md:flex-row justify-center overflow-hidden max-w-[1047px]"
      style={{
        backgroundColor: "",
        borderRadius: "",
      }}
    >
      <div className="flex flex-col items-start md:w-1/2 text-left gap-8">
        <h2
          className="font-body text-[28px] md:text-[32px] leading-snug"
          style={{
            color: "#2C2C2C",
            maxWidth: "457px",
          }}
        >
          Temukan Cita Rasa Baru dari Setiap Varian Kopi Kami
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

      <div className="md:w-1/2 w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={bannerImage}
          alt="Kopi Langit Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
