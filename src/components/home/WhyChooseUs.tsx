import { whyChooseUs } from "@/constants/home";
import { WhyChooseUsItem } from "@/components/home";

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[1.1px] text-[#8B5CF6]">
            Why Practices Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-white lg:text-4xl">
            Why Practices Pick PbN AI Receptionist
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-5">
          {whyChooseUs.map((item) => (
            <WhyChooseUsItem
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};