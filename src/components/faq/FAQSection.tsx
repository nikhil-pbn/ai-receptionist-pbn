import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQ_CATEGORIES } from "@/constants/faq";

export const FAQSection = () => {
    return (
        <section className="w-full py-20">
            <div className="mx-auto max-w-7xl px-6">
                {FAQ_CATEGORIES.map((category) => (
                    <div
                        key={category.title}
                        className="mb-16 last:mb-0"
                    >
                        <h2 className="mb-8 text-3xl font-bold text-foreground">
                            {category.title}
                        </h2>

                        <Accordion className="space-y-3" >
                            {category.items.map((item) => (
                                <AccordionItem
                                    key={item.value}
                                    value={item.value}
                                    className="rounded-2xl border border-foreground/10 px-6 py-2"
                                >
                                    <AccordionTrigger className="py-4 text-left text-lg font-semibold leading-[1.1] text-foreground hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-4 text-base leading-8 text-foreground/65">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </section>
    );
};