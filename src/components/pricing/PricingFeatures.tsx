import { CheckIcon } from "@/icon";
import { PricingFeaturesProps } from "@/types/pricing";

export const PricingFeatures = ({
  badge,
  title,
  description,
  columns,
}: PricingFeaturesProps) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[28px] border border-primary/30 bg-[#17182A] p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[1.1px] text-[#8B4DFF]">
              {badge}
            </p>

            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {description}
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {columns.map((column, index) => (
              <div key={index} className="space-y-6">
                {column.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckIcon
                      size={25}
                      className="mt-1 shrink-0 text-primary"
                    />

                    <p className="text-lg leading-8 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};