import Image from "next/image";
import { AboutFeatureProps } from "@/types/about";


export const Feature = ({
  badge,
  badgeBackground,
  badgeColor,
  heading,
  description1,
  description2,
  image,
  imageAlt,
  reverse = false,
}: AboutFeatureProps) => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid items-center gap-16 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
        >
          {/* Left Content */}
          <div>
            <span
              className="inline-flex rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[1.2px]"
              style={{
                background: badgeBackground,
                color: badgeColor,
              }}
            >
              {badge}
            </span>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {heading}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              {description1}
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              {description2}
            </p>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-xl md:rounded-[30px] border border-white/10 bg-[#191E4A]/20">
            <Image
              src={image}
              alt={imageAlt ?? heading}
              width={560}
              height={500}
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};