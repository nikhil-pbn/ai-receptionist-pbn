import { testimonials } from "@/constants/home";
import { TestimonialCard } from "@/components/home";

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl w-full px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[1px] text-[#8B5CF6]">
            Success Stories
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-2xl font-extrabold leading-tight text-foreground lg:text-[33px]">
            Trusted by practices already running on PbN
          </h2>
        </div>

        <div className="mt-10 md:mt-20 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};