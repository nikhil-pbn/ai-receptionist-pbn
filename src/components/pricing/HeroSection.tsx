import { heroSection } from "@/constants/pricing";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className="w-full bg-heroGradient">
            <div className="container mx-auto xl:min-w-7xl max-w-7xl px-6">
                <div className="flex w-full max-lg:flex-col items-center justify-between gap-12 py-20">
                    <div className="flex w-full flex-col items-center gap-6">
                        <h1 className="text-3xl max-w-4xl text-center font-extrabold tracking-tight text-white sm:text-5xl">
                            {heroSection.title}
                        </h1>
                        <p className="mt-3 text-base text-white/60 max-w-4xl text-center sm:mt-5 font-normal">
                            {heroSection.description}
                        </p>
                        <Link
                            href={heroSection.link.href}
                            className="rounded-xl md:rounded-full bg-transparent px-4 py-2 md:px-7 md:py-3.5 text-[#8B4DFF] font-normal transition">
                            {heroSection.link.label}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}