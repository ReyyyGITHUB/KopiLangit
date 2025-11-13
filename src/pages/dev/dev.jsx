import React from "react";

export default function DevMode() {
  return (
    <div>
      <div className="flex items-center justify-center px-[120px]">
        <div className="w-full bg-linear-180 from-[#FAF3E0] to-[#EAD7C0]">
          <div className="flex flex-col items-center gap-6 max-w-[674px]">
            <p className="text-[#6B5E51] text-center montserrat text-xs font-normal uppercase w-full">
              Dibuat dengan Hangat, dari Bandung
            </p>
            <div className="flex flex-col gap-3">
              <h1 className="text-[#2C2C2C] text-center montserrat text-[42px] font-bold">
                Temukan Cita Rasa KopiLangit
              </h1>
              <p className="text-[#6B5E51] text-center poppins text-lg font-normal">
                Kami percaya setiap cangkir punya cerita, yuk ngobrol,
                kolaborasi, atau sekadar tukar rasa kopi.
              </p>
            </div>
          </div>

          <button className="mt-[100px] px-6 py-4 bg-[#8B5E3C] rounded-full text-white text-center poppins text-base font-normal">
            Mulai Ngobrol
          </button>

          <div className="inline-flex pt-9 pb-[49px] items-start gap-[159px] border-t-[#A47148]">
            {/* iamge */}
            <div className="w-[144px] h-[50px]">
              <img src="/assets/images/coffe/kopi_langit.png" alt="" />
            </div>

            {/* navlink and icon */}
            <div className="flex flex-col gap-8 items-center">
              {/* navlink */}
              <div className="flex items-center gap-6 border w-full">
                <h1 className="poppins text-[#8B5E3C] text-base font-normal">
                  Tentang Kami
                </h1>
                <h1 className="poppins text-[#8B5E3C] text-base font-normal">
                  Tentang Kami
                </h1>
                <h1 className="poppins text-[#8B5E3C] text-base font-normal">
                  Tentang Kami
                </h1>
                <h1 className="poppins text-[#8B5E3C] text-base font-normal">
                  Tentang Kami
                </h1>
              </div>
              {/* social icon */}
              <div className="flex flex-row gap-6">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
