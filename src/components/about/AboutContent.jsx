import AboutTimeline from "./AboutTimeline";

export default function AboutContent() {
  return (
    <div className="md:w-1/2 w-full flex flex-col items-start text-left max-w-[520px]">
      <h2 className="font-heading text-[32px] md:text-[32px] font-semibold mb-6 montserrat">
        KopiLangit: Dimulai dari Sebuah Cangkir
      </h2>

      <p className="font-body text-lg opensans leading-8 mb-4" style={{ color: "#5C4938" }}>
        Kami percaya setiap cangkir kopi memiliki cerita. Sejak awal, kami memadukan cita rasa
        khas biji pilihan Indonesia dengan pengalaman menikmati suasana yang hangat dan bersahabat.
      </p>

      <p className="font-body text-lg opensans leading-8 mb-8" style={{ color: "#5C4938" }}>
        Dari Bandung, kami mulai perjalanan ini dengan semangat sederhana - menghadirkan kopi yang
        tak hanya nikmat, tapi juga menjadi penghubung antara rasa, aroma, dan cerita di setiap
        tegukan.
      </p>

      <AboutTimeline />
    </div>
  );
}
