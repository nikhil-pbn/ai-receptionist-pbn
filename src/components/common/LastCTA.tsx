import Image from "next/image";

import { DemoButton } from "@/components/common";
import Link from "next/link";

type CTASectionProps = {
  heading: string;
  description: string;
  badge?: string;
  more?: string;
};

export const LastCTA = ({
  heading,
  description,
  badge,
  more,
}: CTASectionProps) => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[22px] border border-foreground/10 bg-heroGradient">
          <div className="flex flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:justify-evenly lg:px-10 lg:py-16">
            {/* Image */}
            <div className="flex shrink-0 justify-center">
              <Image
                src="/assets/common/AI-Receptionist.png"
                alt={heading}
                width={253}
                height={253}
                priority
                className="size-60"
              />
            </div>

            {/* Content */}
            <div className="flex max-w-xl flex-col items-center lg:items-start">
              {badge && <p className="text-[#8B4DFF] bg-[#7d5bbb1b] p-3 rounded-full font-bold leading-1.5 text-sm mb-4">{badge}</p>}
              <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground lg:text-left lg:text-5xl">
                {heading}
              </h2>

              <p className="my-6 text-center text-base leading-8 text-foreground/60 lg:text-left">
                {description}
              </p>
              {more && (
                <div className="flex max-sm:flex-col items-center justify-center gap-4">
                  <Link href="tel:425-434-5570" className="rounded-xl w-fit md:rounded-full bg-brand px-4 py-2 md:px-7 md:py-3.5 text-white font-semibold transition hover:opacity-90">
                  Call 425-434-5570
                </Link>
                  <Link href="/faq#contact-form" className="rounded-xl w-fit md:rounded-full bg-transparent border border-border px-4 py-2 md:px-7 md:py-3.5 text-foreground font-semibold transition hover:opacity-90">
                    Book a Full Demo
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};