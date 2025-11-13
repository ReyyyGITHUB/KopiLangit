export default function MenuCTA() {
  return (
    <div className="mt-16 flex flex-col items-center gap-6">
      <h3
        className="font-heading text-[24px] font-medium text-center"
        style={{ color: "#2C2C2C" }}
      >
        Mau lihat semua menu kami?
      </h3>
      <button
        className="rounded-full font-brand text-[16px] px-8 py-4 border transition-all duration-300 shadow-sm"
        style={{
          borderColor: "#8B5E3C",
          color: "#8B5E3C",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#8B5E3C";
          e.currentTarget.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#8B5E3C";
        }}
      >
        Click untuk lihat menu lengkap
      </button>
    </div>
  );
}
