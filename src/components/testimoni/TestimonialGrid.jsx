import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid({ testimonials }) {
  return (
    <div
      className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8 
        max-w-[1200px]
      "
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
      ))}
    </div>
  );
}
