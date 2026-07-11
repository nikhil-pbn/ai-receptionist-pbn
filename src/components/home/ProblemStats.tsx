import { problemStats } from "@/constants/home";
import { ProblemStatsCard } from "@/components/home";

export const ProblemStats = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        {problemStats.badge}
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-white lg:text-4xl">
                        {problemStats.title}
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-white/55">
                        {problemStats.description}
                    </p>
                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {problemStats.stats.map((item) => (
                        <ProblemStatsCard
                            key={item.value}
                            value={item.value}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};