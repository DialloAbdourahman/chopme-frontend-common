import { z } from "zod";
import { EnumRestaurantMemberRole } from "../enums/restaurant-member-role";

export const createRestaurantMemberSchema = z
  .object({
    fullName: z.string().min(5, "Full name must be at least 5 characters long"),

    email: z.email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
        "Password must contain uppercase, lowercase, number and special character",
      ),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    role: z.nativeEnum(EnumRestaurantMemberRole),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CreateRestaurantMemberDto = z.infer<
  typeof createRestaurantMemberSchema
>;
