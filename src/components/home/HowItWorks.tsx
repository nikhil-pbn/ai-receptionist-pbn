import { howItWorksItems } from "@/constants/home";
import { HowItWorksCard } from "@/components/home";

export const HowItWorks = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto max-w-7xl px-6">

                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        How It Works
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-foreground lg:text-4xl">
                        Live in one click, not one project
                    </h2>
                </div>

                <div className="mt-10 md:mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {howItWorksItems.map((item) => (
                        <HowItWorksCard
                            key={item.number}
                            {...item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};