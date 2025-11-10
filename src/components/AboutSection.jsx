export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-24 md:py-32"
      style={{
        backgroundColor: "#F2E4CA",
        color: "#2C2C2C",
      }}
    >
      {/* === Left Image === */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/assets/images/coffe/coffe_about.png" // ganti path sesuai file lo
          alt="Tentang KopiLangit"
          className="w-full max-w-[508px] not-last:shadow-md object-cover"
          style={{
            borderRadius: "",
          }}
        />
      </div>

      {/* === Right Content === */}
      <div className="md:w-1/2 w-full flex flex-col items-start text-left max-w-[520px]">
        <h2
          className="font-heading text-[32px] md:text-[32px] font-semibold mb-6 montserrat"
          style={{ color: "#2C2C2C" }}
        >
          KopiLangit: Dimulai dari Sebuah Cangkir
        </h2>

        <p
          className="font-body text-lg opensans leading-8 mb-4"
          style={{ color: "#5C4938" }}
        >
          Kami percaya setiap cangkir kopi memiliki cerita. Sejak awal, kami
          memadukan cita rasa khas biji pilihan Indonesia dengan pengalaman
          menikmati suasana yang hangat dan bersahabat.
        </p>

        <p
          className="font-body text-lg opensans leading-8 mb-8"
          style={{ color: "#5C4938" }}
        >
          Dari Bandung, kami mulai perjalanan ini dengan semangat sederhana —
          menghadirkan kopi yang tak hanya nikmat, tapi juga menjadi penghubung
          antara rasa, aroma, dan cerita di setiap tegukan.
        </p>

        {/* === Timeline Section === */}
        <div className="w-full border-l-4 pl-6 border-[#8B5E3C] space-y-8 mb-10">
          {/* 2010 */}
          <div>
            <h3
              className="font-heading text-xl opensans font-semibold"
              style={{ color: "#8B5E3C" }}
            >
              2010 - Awal Cerita
            </h3>
            <p
              className="font-body text-base opensans mt-1"
              style={{ color: "#5C4938" }}
            >
              Berawal dari kedai kecil di Bandung, KopiLangit berdiri dengan
              satu visi — menyajikan kopi yang punya makna.
            </p>
          </div>

          {/* 2015 */}
          <div>
            <h3
              className="font-heading text-xl opensans font-semibold"
              style={{ color: "#8B5E3C" }}
            >
              2015 - Mulai Dikenal
            </h3>
            <p
              className="font-body text-base mt-1"
              style={{ color: "#5C4938" }}
            >
              Komunitas pecinta kopi mulai tumbuh, dan aroma khas KopiLangit
              menyebar ke berbagai sudut kota.
            </p>
          </div>

          {/* 2020 */}
          <div>
            <h3
              className="font-heading text-xl opensans font-semibold"
              style={{ color: "#8B5E3C" }}
            >
              2020 - Ekspansi dan Inovasi
            </h3>
            <p
              className="font-body text-base mt-1"
              style={{ color: "#5C4938" }}
            >
              Kami memperluas jaringan ke berbagai kota dan mulai menghadirkan
              menu spesial seperti *Kopi Langit Latte* dan *Es Kopi Hangat*.
            </p>
          </div>

          {/* 2025 */}
          <div>
            <h3
              className="font-heading text-xl font-semibold"
              style={{ color: "#8B5E3C" }}
            >
              2025 - Menuju Langit Lebih Tinggi
            </h3>
            <p
              className="font-body text-base mt-1"
              style={{ color: "#5C4938" }}
            >
              Kami terus bereksperimen dengan cita rasa baru dan berkomitmen
              membawa kehangatan KopiLangit ke seluruh penjuru negeri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
