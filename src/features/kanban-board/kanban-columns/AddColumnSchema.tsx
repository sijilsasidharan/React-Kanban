import { z } from "zod";

export const AddColumnFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Minimum 2 strings needed",
    })
    .max(50, {
      message: "Maximum 50 strings exceeded",
    })
    .email({ message: "Invalid email" }),
  color: z.string().refine((value) => /^#[0-9A-F]{6}$/i.test(value)),
});

export type LoginFormSchema = z.infer<typeof AddColumnFormSchema>;
