import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { PricingFAQProps } from "@/types/pricing";

export const PricingFAQ = ({
    badge,
    title,
    items,
}: PricingFAQProps) => {
    return (
       <section className="w-full py-20">
            <div className="mx-auto max-w-6xl px-6 flex flex-col gap-10 items-center justify-center">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-[1.1px] text-[#8B5CF6]">
                        {badge}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold text-white lg:text-4xl">
                        {title}
                    </h2>
                </div>

                <Accordion
                    className="max-w-3xl rounded-lg"
                >
                    {items.map((item) => (
                        <AccordionItem
                            key={item.question}
                            className="border-border border my-1 rounded-lg sm:rounded-[15px] px-3 py-2 sm:px-6.5 sm:py-4.5"
                        >
                            <AccordionTrigger className=" text-sm font-normal py-0">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};