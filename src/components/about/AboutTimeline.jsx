const timelineEvents = [
  {
    title: "2010 - Awal Cerita",
    description: (
      <>
        Berawal dari kedai kecil di Bandung, KopiLangit berdiri dengan satu visi - menyajikan
        kopi yang punya makna.
      </>
    ),
  },
  {
    title: "2015 - Mulai Dikenal",
    description: (
      <>
        Komunitas pecinta kopi mulai tumbuh, dan aroma khas KopiLangit menyebar ke berbagai sudut
        kota.
      </>
    ),
  },
  {
    title: "2020 - Ekspansi dan Inovasi",
    description: (
      <>
        Kami memperluas jaringan ke berbagai kota dan mulai menghadirkan menu spesial seperti{" "}
        <em>Kopi Langit Latte</em> dan <em>Es Kopi Hangat</em>.
      </>
    ),
  },
  {
    title: "2025 - Menuju Langit Lebih Tinggi",
    description: (
      <>
        Kami terus bereksperimen dengan cita rasa baru dan berkomitmen membawa kehangatan
        KopiLangit ke seluruh penjuru negeri.
      </>
    ),
  },
];

export default function AboutTimeline() {
  return (
    <div className="w-full border-l-4 pl-6 border-[#8B5E3C] space-y-8 mb-10">
      {timelineEvents.map((event) => (
        <div key={event.title}>
          <h3
            className="font-heading text-xl opensans font-semibold"
            style={{ color: "#8B5E3C" }}
          >
            {event.title}
          </h3>
          <p className="font-body text-base opensans mt-1" style={{ color: "#5C4938" }}>
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
}
