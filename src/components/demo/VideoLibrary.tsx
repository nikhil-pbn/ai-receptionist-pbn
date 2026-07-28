import { VIDEO_LIBRARY } from "@/constants/demo";

import { VideoCard } from "./VideoCard";

export const VideoLibrary = () => {
    return (
        <section id="recorded-demo" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        Use Case Video Library
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-foreground lg:text-4xl">
                        All 6 Real Scenarios
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-foreground/55">
                        Each card is recreated from a real AIR call. Voice persona
                        &ldquo;Maya,&rdquo; fictional practice &ldquo;Riverbend Family
                        Dental,&rdquo; approximately 30–60 seconds each.
                    </p>
                </div>

                {/* Grid */}

                <div className="pt-10 sm:mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {VIDEO_LIBRARY.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                        />
                    ))}
                </div>

                {/* Footer */}

                <p className="mt-12 text-center text-sm text-foreground/40">
                    Production spec for all six: voice persona &ldquo;Maya,&rdquo;
                    fictional practice &ldquo;Riverbend Family Dental&rdquo;, 30–60
                    seconds spoken, pacing slowed on phone numbers, codes,
                    dates and provider names, with no on-screen text markup
                    in AIR&apos;s spoken lines.
                </p>
            </div>
        </section>
    );
};