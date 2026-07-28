"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
    BookDemoFormValues,
    bookDemoFormSchema,
} from "@/components/faqPage/FormSchema";

import { DEMO_FORM_FIELDS } from "@/constants/faqPage";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

export const BookDemoForm = () => {
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

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
            setHasAttemptedSubmit(false);
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong.", {
                description: "Please try again later.",
            });
        }
    };

    const onInvalid = () => {
        setHasAttemptedSubmit(true);

        toast.error("Please fix the highlighted fields.");
    };

    const {
        isSubmitting,
        isValid,
    } = form.formState;

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
                        Tell us a bit about your practice and we'll reach out to set up a
                        walkthrough.
                    </p>
                </div>

                {/* Form */}

                <Card className="mx-auto mt-10 max-w-135 rounded-3xl md:rounded-[32px] border border-foreground/10 bg-card">
                    <CardContent className="p-4 md:p-10">
                        <form onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
                            <FieldGroup>
                                {DEMO_FORM_FIELDS.map((item) => (
                                    <Controller
                                        key={item.name}
                                        name={item.name as keyof BookDemoFormValues}
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel className="mb-3 text-sm font-semibold text-foreground">
                                                    {item.label}
                                                </FieldLabel>

                                                <Input
                                                    {...field}
                                                    value={field.value ?? ""}
                                                    type={item.type ?? "text"}
                                                    placeholder={item.placeholder}
                                                    autoComplete="off"
                                                    aria-invalid={fieldState.invalid}
                                                    disabled={isSubmitting}
                                                    className="h-10 md:h-12 rounded-xl border-border bg-transparent px-4 text-xs md:text-base text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-60"
                                                />

                                                {fieldState.error && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                ))}
                            </FieldGroup>

                            <Button
                                type="submit"
                                disabled={
                                    isSubmitting}
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