import Link from "next/link";

import { ResumeIcon } from "@/icon";
import { seeItInAction } from "@/constants/home";

export const SeeItInAction = () => {
    return (
        <section className="w-full px-6 py-20 lg:py-28">
            <div className="mx-auto flex max-w-7xl flex-col items-center">
                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        See It In Action
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-foreground lg:text-4xl">
                        Real Conversations, Real Bookings
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal lg:text-nowrap leading-6 text-foreground/55">
                        See how AIR actually talks to your patients — six real scenarios, recreated from real AIR calls.
                    </p>
                </div>

                <div className="mt-16 grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {seeItInAction.map((item) => (
                        <article
                            key={item.title}
                            className="overflow-hidden rounded-3xl border border-foreground/10 bg-surface"
                        >
                            {/* Video Preview */}
                            <div className="flex h-48 items-center justify-center bg-cardGradient">
                                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-brand transition hover:scale-105">
                                    <ResumeIcon size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="space-y-5 p-6">
                                <div>
                                    <h3 className="text-[15px] font-bold text-foreground">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-xs font-normal lg:leading-8 text-foreground/55">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    {item.highlights.map((text) => (
                                        <p
                                            key={text}
                                            className="text-xs lg:leading-7 text-[#9B4CDB]"
                                        >
                                            &quot;{text}&quot;
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <Link
                    href="/demo#recorded-demo"
                    className="rounded-full border mt-10 border-foreground/15 px-10 py-4 text-sm font-normal text-foreground/70 transition hover:border-border/80 hover:text-foreground"
                >
                    See All 6 Demos
                </Link>
            </div>
        </section>
    );
};