import { HeroImageCalls } from "@/constants";

export const HeroImage = () => {
    return (
        <div>
            <div className="relative w-full min-w-160 flex justify-between rounded-3xl border border-foreground/10 bg-surface/90 p-6 shadow-2xl backdrop-blur-xl">
            {/* Left Card */}
                <div>
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-xs font-semibold text-foreground">
                            OnCall — Live Calls
                        </h3>

                        <div className="flex items-center gap-2 text-[10px] text-brand dark:text-violet-400">
                            Answering
                        </div>
                    </div>

                    {/* List */}
                    <div className="space-y-4 m-4">
                        {HeroImageCalls.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between border-b border-foreground/5 pb-4 last:border-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`flex size-10 items-center justify-center rounded-full ${item.color} text-[10px] font-bold text-white`}
                                    >
                                        {item.initials}
                                    </div>

                                    <div>
                                        <p className="font-medium text-foreground text-xs">{item.name}</p>
                                        <p className="text-sm text-muted-foreground text-[10px]">{item.subtitle}</p>
                                    </div>
                                </div>

                                <span
                                    className={`rounded-full px-2 py-1 text-[10px] font-semibold ${item.status === "Booked"
                                        ? "bg-[#9B4CDB] text-[#E4C3FF]"
                                        : "bg-[#5750E533] text-[#2f5fd0] dark:text-[#7ACCFB]"
                                        }`}
                                >
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Card */}
                    <div className="mt-8 rounded-2xl bg-[rgba(87, 80, 229, 0.10)] border border-[rgba(255, 255, 255, 0.10)] px-6 py-5">
                        <p className="text-base font-extrabold text-[#2f5fd0] dark:text-[#7ACCFB]">
                            1 in 3{" "}
                            <span className="text-[10px] font-normal text-muted-foreground">
                                missed calls are new patients
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                {/* <Image src="/assets/home/VideoCard.png" width={370} height={370} alt="Sphere" className="object-fill max-w-92.5 absolute inset-y-0 -right-20" /> */}
            </div>
        </div>
    )
}