import { z } from "zod";

export const createClientSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),

    email: z.email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
        "Password must contain uppercase, lowercase, number and special character",
      ),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CreateClientDto = z.infer<typeof createClientSchema>;
