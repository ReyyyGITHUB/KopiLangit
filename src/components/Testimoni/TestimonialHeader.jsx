export default function TestimonialHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-6 mb-16">
      <div className="border border-[#C8A47E] px-4 py-2 rounded-md">
        <p className="poppins text-[18px] font-medium text-[#8B5E3C]">
          Cerita Pelanggan
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h2 className="montserrat text-[42px] font-semibold text-[#2C2C2C]">
          Apa Kata Pelanggan Kami
        </h2>
        <p className="opensans text-[18px] text-[#6B5E51]">
          Cerita jujur dari mereka yang menikmati setiap seduhan.
        </p>
      </div>
    </div>
  );
}
