import { PageHeroProps } from "@/types/home/hero";
import Link from "next/link";


export const PageHero = ({
    badge,
    title,
    description,
    link,
}: PageHeroProps) => {
    return (
        <section className="relative w-full overflow-hidden bg-[#F7FCFC]">
            {/* Background Glow */}
            <div className="absolute right-0 top-0 h-full w-120 rounded-full bg-[#8DE8DD]/50 blur-[120px]" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
                {badge && (
                    <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#00B6A7]">
                        <span className="h-2 w-2 rounded-full bg-[#00B6A7]" />
                        {badge}
                    </div>
                )}

                <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-[#0B2A35] md:text-6xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-3xl text-xl text-[#5B7380]">
                    {description}
                </p>

                {link && <div className="mt-10">
                    <Link href={link.href} className="mt-6 inline-block rounded-md text-[#00B6A7] px-6 py-3  hover:text-[#009c8d]">
                        {link.label}
                    </Link>
                </div>}
            </div>
        </section>
    );
};