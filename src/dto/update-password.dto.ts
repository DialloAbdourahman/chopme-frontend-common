import { z } from "zod";

export const updatePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
      "Password must contain uppercase, lowercase, number and special character",
    ),
});

export type UpdatePasswordDto = z.infer<typeof updatePasswordSchema>;
