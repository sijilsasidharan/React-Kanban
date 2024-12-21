import { z } from "zod";

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Minimum 2 strings needed",
    })
    .max(50, {
      message: "Maximum 50 strings exceeded",
    })
    .email({ message: "Invalid email" }),
  password: z.string().min(3),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
