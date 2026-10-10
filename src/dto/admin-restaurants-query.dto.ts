import { z } from "zod";
import { EnumRestaurantType } from "../enums/restaurant-types";

export const adminRestaurantsQuerySchema = z.object({
  search: z.string().optional(),
  type: z.nativeEnum(EnumRestaurantType).optional(),
  deleted: z.boolean().optional(),
  isClosed: z.boolean().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export type AdminRestaurantsQueryDto = z.infer<
  typeof adminRestaurantsQuerySchema
>;
