export default function FooterCTA() {
  return (
    <div className="flex flex-col items-center gap-1 max-w-[720px] pt-20 px-6 text-center">
      <p className="text-[#6B5E51] montserrat text-xs font-normal uppercase tracking-[2px] mb-4">
        Dibuat dengan Hangat, dari Bandung
      </p>

      <div className="flex flex-col gap-3">
        <h1 className="text-[#2C2C2C] montserrat text-[42px] font-bold leading-tight">
          Temukan Cita Rasa KopiLangit
        </h1>
        <p className="text-[#6B5E51] poppins text-lg font-normal leading-relaxed">
          Kami percaya setiap cangkir punya cerita, yuk ngobrol, kolaborasi, atau
          sekadar tukar rasa kopi.
        </p>
      </div>

      <button
        className="
          mt-[80px] px-8 py-4 
          bg-[#8B5E3C] hover:bg-[#A47148] 
          rounded-full text-white poppins text-base font-normal
          transition-all duration-300 shadow-md hover:shadow-lg
        "
      >
        Mulai Ngobrol
      </button>
    </div>
  );
}
