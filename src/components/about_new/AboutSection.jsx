import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-[#FAF3E0] to-[#F2E4CA] flex justify-center items-center py-24 px-6 md:px-16"
    >
      <div className="max-w-[1200px] flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* === Left Image === */}
        <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
          <img
            src="/assets/images/coffe/coffe_about.png"
            alt="Tentang KopiLangit"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex flex-col gap-10 md:w-1/2 text-[#2C2C2C]">
          <div className="flex flex-col gap-6">
            <h2 className="montserrat text-[36px] md:text-[42px] font-semibold leading-tight">
              Tentang <span className="text-[#8B5E3C]">KopiLangit</span>
            </h2>

            <p className="opensans text-[16px] md:text-[18px] text-[#5C4938] leading-relaxed">
              KopiLangit lahir dari keinginan untuk mengenalkan kekayaan kopi
              lokal Indonesia. Kami percaya, setiap seduhan bukan sekadar rasa,
              tapi juga cerita — tentang kehangatan, ketulusan, dan kenangan
              yang menyertai setiap tegukan.
            </p>

            <p className="opensans text-[16px] md:text-[18px] text-[#5C4938] leading-relaxed">
              Setiap biji kopi kami pilih langsung dari petani lokal yang penuh
              dedikasi. Dari proses sangrai hingga disajikan di meja Anda,
              semuanya kami lakukan dengan sepenuh hati — karena bagi kami, kopi
              adalah bentuk cinta sederhana yang menghubungkan manusia.
            </p>
          </div>

          {/* === Timeline === */}
          <div className="mt-10 flex flex-col gap-10">
            <h3 className="montserrat text-[28px] font-semibold text-[#2C2C2C]">
              Perjalanan Kami
            </h3>

            <div className="flex flex-col sm:flex-row justify-between gap-10">
              {[
                {
                  year: "2010",
                  text: "Berawal dari kedai kecil di pinggiran Bandung.",
                },
                {
                  year: "2015",
                  text: "Mulai memperkenalkan kopi lokal di berbagai event komunitas.",
                },
                {
                  year: "2023",
                  text: "Menjadi tempat berbagi cerita dan rasa bagi penikmat kopi.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center sm:w-[200px]"
                >
                  <div className="relative">
                    <div className="w-[48px] h-[48px] bg-[#C8A47E] rounded-full shadow-md"></div>
                    {i < 2 && (
                      <div className="hidden sm:block absolute top-1/2 left-[52px] w-[120px] h-[2px] bg-[#C8A47E]" />
                    )}
                  </div>
                  <span className="mt-3 montserrat text-[20px] font-semibold text-[#2C2C2C]">
                    {item.year}
                  </span>
                  <p className="mt-2 opensans text-[15px] text-[#5C4938] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
