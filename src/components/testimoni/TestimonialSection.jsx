import TestimonialHeader from "./TestimonialHeader";
import TestimonialGrid from "./TestimonialGrid";
import testimonials from "./testimonialsData";

export default function CeritaPelangganSection() {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col items-center justify-center py-24 px-6 md:px-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <TestimonialHeader />
      <TestimonialGrid testimonials={testimonials} />
    </section>
  );
}
