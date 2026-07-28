import { Control, Controller } from "react-hook-form";

import { DEMO_FORM_FIELDS } from "@/constants/faq";
import type { BookDemoFormValues } from "@/components/faq/FormSchema";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface BookDemoFieldsProps {
    control: Control<BookDemoFormValues>;
    disabled?: boolean;
}

export const BookDemoFields = ({ control, disabled }: BookDemoFieldsProps) => (
    <FieldGroup>
        {DEMO_FORM_FIELDS.map((item) => (
            <Controller
                key={item.name}
                name={item.name as keyof BookDemoFormValues}
                control={control}
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
                            disabled={disabled}
                            className="h-10 md:h-12 rounded-xl border-border bg-transparent px-4 text-xs md:text-base text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        {fieldState.error && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />
        ))}
    </FieldGroup>
);
