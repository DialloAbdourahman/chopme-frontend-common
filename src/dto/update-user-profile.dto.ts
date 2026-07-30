import { z } from "zod";

export const updateUserProfileSchema = z.object({
  fullName: z.string().optional(),
});

export type UpdateUserProfileDto = z.infer<typeof updateUserProfileSchema>;
