import { z } from "zod";

export const emailPasswordLoginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export type EmailPasswordLoginDto = z.infer<typeof emailPasswordLoginSchema>;
