import Link from "next/link";
import { PhoneIcon, ResumeIcon } from "@/icon";

export const HearAIR = () => {
    return (
        <section className="px-6 w-full py-20 bg-sectionBg">
            <div className="mx-auto lg:px-20 max-w-7xl">
                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        try It yourself
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-white lg:text-4xl">
                        Hear AIR for Yourself
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-white/55">
                        The fastest way to understand OnCall is to talk to it.
                    </p>
                </div>

                <div className="mt-16 flex gap-5 flex-col md:flex-row items-stretch justify-center">
                    {/* Live Demo */}
                    <div className="rounded-3xl border border-white/10 flex-1 bg-[#1C1A2C] p-7.5">
                        <h3 className="text-lg font-bold text-white">
                            Call the Live Demo Line
                        </h3>

                        <p className="mt-4 text-sm font-normal leading-8 text-white/55">
                            Call now and experience a live conversation with AIR, just like
                            one of your patients would. Try booking a new patient appointment
                            or asking about office hours.
                        </p>

                        <Link
                            href="tel:+14254345570"
                            className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#5750E5] font-semibold text-white transition hover:opacity-90"
                        >
                            <PhoneIcon size={15} />
                            Call 425-434-5570
                        </Link>
                    </div>

                    {/* Recorded Demo */}
                    <div className="rounded-3xl border border-white/10 flex-1 bg-[#1C1A2C] p-4 sm:p-7.5">
                        <h3 className="text-lg font-bold text-white">
                            Listen to a Recorded Demo
                        </h3>

                        <p className="mt-4 text-sm font-normal leading-8 text-white/55">
                            Prefer to listen first? Hear AIR handle a real new-patient booking
                            call from start to finish.
                        </p>

                        <button className="mt-10 flex w-full items-center gap-4 rounded-2xl bg-[#191E4A] p-4 transition hover:bg-[#2D347F]">
                            <div className="flex size-8 sm:size-12 items-center justify-center rounded-full bg-[#5750E5]">
                                <ResumeIcon size={13} />
                            </div>

                            <div className="text-left flex-1">
                                <p className="font-semibold text-sm text-white">
                                    New Patient Appointment Booking
                                </p>

                                <p className="text-sm text-white/50">
                                    Voice: Maya · ~45 sec
                                </p>
                            </div>
                        </button>

                        <Link
                            href="/demo#recorded-demo"
                            className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/20 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                        >
                            See Every Scenario →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};