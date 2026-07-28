import { ROI_SECTION, ROI_STATS } from "@/constants/pricing";

export const ROISection = () => {
    return (
        <section className="w-full bg-sectionBg py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        {ROI_SECTION.badge}
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-foreground lg:text-4xl">
                        {ROI_SECTION.heading}
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-foreground/55">
                        {ROI_SECTION.description}
                    </p>
                </div>

                <div className="mx-auto mt-10 md:mt-20 max-w-5xl rounded-[28px] border border-foreground/10 bg-surface px-4 py-6 md:px-10 md:py-12 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
                    <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2">
                        {ROI_STATS.map((item) => (
                            <div key={item.value} className="text-center md:text-left">
                                <h3 className="text-brand text-4xl font-extrabold">
                                    {item.value}
                                </h3>

                                <p className="mt-4 text-base text-foreground/80">
                                    {item.title}
                                </p>

                                {item.subtitle && (
                                    <p className="text-base text-foreground/55">
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-14">
                        <p className="mx-auto max-w-4xl text-center text-base leading-9 text-foreground/55">
                            {ROI_SECTION.footer}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};