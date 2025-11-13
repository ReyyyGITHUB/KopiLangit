export default function MenuCard({ item }) {
  const { name, price, desc, img, waLink } = item;

  const onMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#A47148";
  };

  const onMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#8B5E3C";
  };

  return (
    <div
      className="
        snap-start shrink-0 w-[387px] h-[454px] bg-white 
        rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.25)] 
        overflow-hidden flex flex-col justify-between 
        transition-all duration-500 ease-out 
        hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(139,94,60,0.25)]
      "
    >
      {/* === Gambar dengan efek zoom === */}
      <div className="w-full h-[220px] overflow-hidden">
        <img
          src={img}
          alt={name}
          className="
            block w-full h-full object-cover 
            transition-transform duration-700 ease-out 
            hover:scale-110
          "
        />
      </div>

      {/* === Konten === */}
      <div className="flex flex-col justify-between p-6 grow">
        <div className="flex items-start justify-between mb-2">
          <h4 className="poppins text-[18px] font-semibold text-[#000000]">
            {name}
          </h4>
          <span className="poppins text-[18px] font-semibold text-[#000000]">
            {price}
          </span>
        </div>

        <p className="opensans text-[14px] leading-relaxed mb-6 text-[#6B5E51]">
          {desc}
        </p>

        {/* === Tombol WhatsApp === */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2 text-white poppins text-[14px]
            rounded-full transition-all duration-300 py-2.5 shadow-md
            hover:shadow-lg hover:brightness-110
          "
          style={{
            backgroundColor: "#8B5E3C",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
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
  );
}
