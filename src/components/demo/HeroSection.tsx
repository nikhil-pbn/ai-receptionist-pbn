import { DemoButton } from "@/components/common";
import { heroSection } from "@/constants/demoPage";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className="w-full bg-heroGradient">
            <div className="container mx-auto xl:min-w-7xl max-w-7xl px-6">
                <div className="flex w-full max-lg:flex-col items-center justify-between gap-12 py-20">
                    <div className="flex w-full flex-col items-center gap-6">
                        <h1 className="text-3xl max-w-4xl text-center font-extrabold tracking-tight text-foreground sm:text-5xl">
                            {heroSection.title}
                        </h1>
                        <p className="mt-3 text-base text-foreground/60 sm:mt-5 font-normal sm:text-lg">
                            {heroSection.description}
                        </p>
                        <div className="mt-5 flex max-sm:flex-col max-sm:items-center gap-4 sm:mt-8">
                            <Link href="/demo#recorded-demo" className="rounded-xl md:rounded-full bg-transparent border border-border px-4 py-2 md:px-7 md:py-3.5 text-foreground font-semibold transition hover:bg-foreground/5">
                                Hear AIR in Action
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}