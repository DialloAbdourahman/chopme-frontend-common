import { z } from "zod";
import { EnumUserRole } from "../enums/user-roles";
import { EnumAuthType } from "../enums/auth-types";

export const adminUsersQuerySchema = z.object({
  role: z.nativeEnum(EnumUserRole).optional(),
  authType: z.nativeEnum(EnumAuthType).optional(),
  active: z.boolean().optional(),
  deleted: z.boolean().optional(),
  dateFrom: z.coerce.date().optional(),
  dateTo: z.coerce.date().optional(),
  sort: z.enum(["asc", "desc"]).optional(),
  sortBy: z
    .enum(["createdAt", "lastLoginAt", "lastTokenRefreshedAt"])
    .optional(),
  search: z.string().optional(),
});

export type AdminUsersQueryDto = z.infer<typeof adminUsersQuerySchema>;
