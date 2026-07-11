import { PricingItem } from "@/types/home";

export const PricingRow = ({
    minutes,
    price,
    popular,
    free,
}: PricingItem) => {
    return (
        <div
            className="flex items-center justify-between p-4 sm:px-8 sm:py-7 border-t border-white/8 bg-[#1B1A2B] hover:bg-[#191E4A] transition-colors"
        >
            <div className="flex items-center max-sm:flex-col gap-4">
                <span className="text-sm text-white">{minutes}</span>

                {popular && (
                    <span className="rounded-full bg-[#9B4CDB] px-2 py-px text-xs font-bold text-white">
                        Most Popular
                    </span>
                )}
            </div>

            <span
                className={`font-bold text-nowrap ${free ? "text-[#9B4CDB] text-base" : "text-white text-sm"
                    }`}
            >
                {price}
            </span>
        </div>
    );
};