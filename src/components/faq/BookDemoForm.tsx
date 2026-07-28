"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { BookDemoFields } from "@/components/faq/BookDemoFields";
import {
    BookDemoFormValues,
    bookDemoFormSchema,
} from "@/components/faq/FormSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const BookDemoForm = () => {
    const form = useForm<BookDemoFormValues>({
        resolver: zodResolver(bookDemoFormSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        shouldFocusError: true,
        defaultValues: {
            practiceName: "",
            fullName: "",
            email: "",
            locations: "",
        },
    });

    const onSubmit = async (values: BookDemoFormValues) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log(values);

            toast.success("Demo request submitted successfully!", {
                description: "Our team will contact you shortly.",
            });

            form.reset();
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong.", {
                description: "Please try again later.",
            });
        }
    };

    const onInvalid = () => toast.error("Please fix the highlighted fields.");

    const { isSubmitting } = form.formState;

    return (
        <section id="contact-form" className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[1.12px] text-[#8B4DFF]">
                        Get In Touch
                    </p>

                    <h2 className="mt-6 text-2xl font-extrabold text-foreground lg:text-4xl">
                        Book a demo
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm font-normal leading-6 text-foreground/55">
                        Tell us a bit about your practice and we&apos;ll reach out to set
                        up a walkthrough.
                    </p>
                </div>

                {/* Form */}
                <Card className="mx-auto mt-10 max-w-135 rounded-3xl md:rounded-[32px] border border-foreground/10 bg-card">
                    <CardContent className="p-4 md:p-10">
                        <form onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
                            <BookDemoFields control={form.control} disabled={isSubmitting} />

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-8 h-10 md:h-14 w-full rounded-2xl md:rounded-full bg-brand text-sm md:text-base font-semibold text-white transition-all duration-300 hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 size-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Request a Demo"
                                )}
                            </Button>

                            <p className="mt-5 text-center text-xs leading-6 text-muted-foreground">
                                Form for internal review — wire up to your CRM or scheduling
                                tool before this page goes live.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
