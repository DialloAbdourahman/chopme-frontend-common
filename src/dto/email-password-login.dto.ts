import { z } from "zod";
import { EnumUserRole } from "../enums/user-roles";

export const emailPasswordLoginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  role: z.nativeEnum(EnumUserRole),
});

export type EmailPasswordLoginDto = z.infer<typeof emailPasswordLoginSchema>;
