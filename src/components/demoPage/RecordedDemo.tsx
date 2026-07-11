"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { RECORDED_DEMO } from "@/constants/demoPage";

import { DemoAudioPlayer, Transcript } from "@/components/demoPage";

export const RecordedDemo = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="py-20 w-full">
            <div className="mx-auto max-w-4xl px-6">

                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        Prefer to Listen First?
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-white lg:text-4xl">
                        Recorded Demo
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-white/55">
                        Hear AIR handle a real new-patient booking call
                        from start to finish — same call, with the full
                        transcript below.
                    </p>
                </div>

                <div className="mt-16 w-full">
                    <DemoAudioPlayer
                        {...RECORDED_DEMO}
                    />

                    <button
                        onClick={() => setOpen(!open)}
                        className="mt-5 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-transparent px-6 py-4 font-semibold text-primary"
                    >
                        {open ? "Hide Transcript" : "Show Transcript"}

                        {open ? (
                            <ChevronUp size={18} />
                        ) : (
                            <ChevronDown size={18} />
                        )}
                    </button>

                    {open && (
                        <Transcript
                            transcript={RECORDED_DEMO.transcript}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};