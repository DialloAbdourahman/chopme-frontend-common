import { z } from "zod";
import { EnumRestaurantType } from "../enums/restaurant-types";

export const findRestaurantSchema = z
  .object({
    search: z.string().optional(),
    city: z.string().optional(),
    longitude: z.number().optional(),
    latitude: z.number().optional(),
    radiusKm: z.number().optional(),
    type: z.nativeEnum(EnumRestaurantType).optional(),
  })
  .optional();

export type FindRestaurantDto = z.infer<typeof findRestaurantSchema>;
