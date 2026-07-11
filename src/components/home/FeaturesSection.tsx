import Image from "next/image";

import { TickIcon } from "@/icon";
import { features } from "@/constants/home";

export const FeaturesSection = () => {
    return (
        <section id="features" className="px-6 py-20 w-full bg-sectionBg">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#84EBD1]">
                        Features
                    </p>

                    <h2 className="mt-6 text-3xl font-extrabold text-white lg:text-4xl">
                        Built for the way dental practices actually run
                    </h2>
                </div>

                <div className="mt-20 space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`grid items-center gap-14 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Content */}
                            <div>
                                <span
                                    className="inline-flex rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[1.2px]"
                                    style={{
                                        background: feature.badgeBackground,
                                        color: feature.badgeColor,
                                    }}
                                >
                                    {feature.badge}
                                </span>

                                <h3 className="mt-7 text-lg font-black text-white lg:text-2xl">
                                    {feature.title}
                                </h3>

                                <p className="mt-6 text-sm font-normal leading-8 text-white/55">
                                    {feature.description}
                                </p>

                                <div className="mt-8 space-y-5">
                                    {feature.points.map((point) => (
                                        <div
                                            key={point}
                                            className="flex items-start gap-4"
                                        >
                                            <TickIcon
                                                size={14}
                                                className="mt-1 shrink-0 text-primary"
                                            />

                                            <p className="text-sm font-normal text-white/75">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex justify-center">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={560}
                                    height={360}
                                    className="w-full max-w-140"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};