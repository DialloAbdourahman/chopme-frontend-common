import { z } from "zod";
import { EnumRestaurantType } from "../enums/restaurant-types";
import {
  availabilitySchema,
  deliveryPricingKmSchema,
  restaurantAddressSchema,
  restaurantLocationSchema,
} from "./create-restaurant.dto";

export const updateRestaurantSchema = z.object({
  slogan: z.string().optional(),
  description: z.string().optional(),
  phone: z
    .string()
    .regex(
      /^\+2376\d{8}$/,
      "Phone number must be a valid Cameroonian number in the format +237620487789",
    )
    .optional(),
  restaurantEmail: z.string().optional(),
  pictures: z.array(z.string()).optional(),
  deliveryPricingKm: z.array(deliveryPricingKmSchema).optional(),
  availability: z.array(availabilitySchema).optional(),
});

export const adminUpdateRestaurantSchema = z.object({
  name: z.string().optional(),
  type: z.nativeEnum(EnumRestaurantType).optional(),
  address: restaurantAddressSchema.optional(),
  location: restaurantLocationSchema.optional(),
});

export type UpdateRestaurantDto = z.infer<typeof updateRestaurantSchema>;
export type AdminUpdateRestaurantDto = z.infer<
  typeof adminUpdateRestaurantSchema
>;
