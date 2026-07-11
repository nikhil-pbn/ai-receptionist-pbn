import { PricingRow } from "@/components/home";
import { pricingItems } from "@/constants/home";
import Link from "next/link";

export const PricingPreview = () => {
    return (
        <section className="w-full py-20 bg-sectionBg">
            <div className="container mx-auto max-w-7xl px-6">

                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        Pricing
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-white lg:text-4xl">
                        One plan. Every feature. Pay for only minutes you use.
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-white/55">
                        OnCall Receptionist includes the full feature set for every practice. Pricing scales with the AI minutes you need each month, starting free.
                    </p>
                </div>

                <div className="mt-20 overflow-hidden rounded-3xl border border-white/10">

                    <div className="flex items-center justify-between bg-[#242A68] px-3 py-3 sm:px-8 sm:py-7">
                        <span className="text-xs text-nowrap sm:font-bold uppercase sm:tracking-[0.18em] text-white/50">
                            AI Minutes / Month
                        </span>

                        <span className="text-xs text-nowrap sm:font-bold uppercase sm:tracking-[0.18em] text-white/50">
                            Price / Month
                        </span>
                    </div>

                    {pricingItems.map((item) => (
                        <PricingRow key={item.minutes} {...item} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href="/pricing"
                        className="rounded-full border border-white/15 px-10 py-4 text-sm font-normal text-white/70 transition hover:border-border/80 hover:text-white"
                    >
                        See Full Pricing & Features
                    </Link>
                </div>

            </div>
        </section>
    );
};