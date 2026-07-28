import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui";
import { faqList } from "@/constants";

export const FAQSection = () => {
    return (
        <section className="w-full py-20 bg-sectionBg">
            <div className="mx-auto max-w-6xl px-6 flex flex-col gap-10 items-center justify-center">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-[1.1px] text-[#8B5CF6]">
                        Questions
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold text-foreground lg:text-4xl">
                        Your questions, answered
                    </h2>
                </div>

                <Accordion
                    className="max-w-3xl rounded-lg"
                >
                    {faqList.map((item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="border-border border my-1 bg-surface rounded-lg sm:rounded-[15px] px-3 py-2 sm:px-6.5 sm:py-4.5"
                        >
                            <AccordionTrigger className=" text-sm font-normal py-0">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-foreground/70">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Link
                    href="/faq"
                    className="rounded-full border border-foreground/15 px-6 py-2 text-sm font-normal text-foreground/70 transition hover:border-border/80 hover:text-foreground"
                >
                    View all FAQs
                </Link>
            </div>
        </section>
    );
};