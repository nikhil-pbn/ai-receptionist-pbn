import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Theme-aware brand logo.
 * - Dark mode: the original wordmark PNG (white text) — unchanged.
 * - Light mode: the colored leaf mark + an HTML wordmark styled to match the
 *   PNG's two-line lockup, recolored dark so it stays visible on the light
 *   background.
 * Both variants stay in the DOM and are toggled purely via the `dark` class on
 * <html>, so there is no theme flash or hydration mismatch.
 */
export function Logo({
    className,
    imgClassName,
}: {
    className?: string;
    imgClassName?: string;
}) {
    return (
        <span className={cn("inline-flex items-center", className)}>
            {/* Dark theme keeps the original wordmark exactly */}
            <Image
                src="/assets/home/HeaderLogo.png"
                width={150}
                height={40}
                alt="Practice by Numbers"
                priority
                className={cn("hidden object-contain dark:block", imgClassName)}
            />

            {/* Light theme: colored leaf + dark wordmark matching the PNG */}
            <span className="flex items-center justify-center gap-px dark:hidden">
                <Image
                    src="/assets/logo.png"
                    width={50}
                    height={40}
                    alt="Practice by Numbers"
                    priority
                    className="object-contain"
                />
                <span className="flex flex-col items-center font-sans gap-0 text-foreground">
                    <span className="text-xl font-extrabold leading-5 lg:text-[26px]">
                        Practice
                    </span>
                    <span className="text-sm font-bold leading-5 lg:text-lg">
                        by Numbers
                    </span>
                </span>
            </span>
        </span>
    );
}
