import { z } from "zod";

export const updateUserProfileSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full name must be at least 5 characters long")
    .optional(),
});

export type UpdateUserProfileDto = z.infer<typeof updateUserProfileSchema>;
