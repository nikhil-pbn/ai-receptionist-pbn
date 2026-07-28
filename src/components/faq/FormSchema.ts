import { z } from "zod";

export const bookDemoFormSchema = z.object({
  practiceName: z
    .string()
    .min(2, "Practice name is required.")
    .max(100),

  fullName: z
    .string()
    .min(2, "Your name is required.")
    .max(100),

  email: z
    .string()
    .email("Please enter a valid work email."),

  locations: z
    .string()
    .min(1, "Number of locations is required."),
});

export type BookDemoFormValues = z.infer<typeof bookDemoFormSchema>;