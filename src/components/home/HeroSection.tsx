import { DemoButton } from "@/components/common";
import { HerosSection } from "@/constants/home";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className="w-full bg-heroGradient">
            <div className="container mx-auto xl:min-w-7xl max-w-7xl px-6">
                <div className="flex w-full max-lg:flex-col items-center justify-between gap-12 py-20">
                    <div className="flex w-full lg:max-w-110.75 flex-col max-lg:items-center flex-1 items-start gap-6">
                        <h1 className="text-3xl font-extrabold max-lg:text-center tracking-tight text-white sm:text-5xl">
                            {HerosSection.title}
                        </h1>
                        <Image src="/assets/home/VideoCard.png" width={475} height={550} alt="Sphere" className="object-fill lg:hidden sm:max-w-180" />

                        <p className="mt-3 text-base max-lg:max-w-2xl text-white/60 max-lg:text-center sm:mt-5 font-normal sm:text-sm">
                            {HerosSection.description}
                        </p>
                        <div className="mt-5 flex max-lg:w-full max-sm:flex-col max-lg:justify-center max-sm:items-center gap-4 sm:mt-8">
                            <DemoButton />
                            <Link href="/demo#recorded-demo" className="rounded-xl md:rounded-full bg-transparent border border-border px-4 py-2 md:px-7 md:py-3.5 text-white font-semibold transition hover:bg-white/5">
                                Hear AIR in Action
                            </Link>
                        </div>
                        <p className="text-xs max-lg:text-center max-lg:w-full text-white/40">
                            {HerosSection.spanText}
                        </p>
                    </div>
                    <Image src="/assets/home/VideoCard.png" width={475} height={550} alt="Sphere" className="object-fill max-lg:hidden sm:max-w-180" />
                </div>
            </div>
        </section>
    )
}