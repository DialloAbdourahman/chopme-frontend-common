import { z } from "zod";
import { EnumRestaurantType } from "../enums/restaurant-types";

export const restaurantAddressSchema = z.object({
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  longName: z.string().optional(),
  countryCode: z.string().min(1, "Country code is required"),
  state: z.string().optional(),
});

export const restaurantLocationSchema = z.object({
  type: z.literal("Point"),
  coordinates: z.array(z.number()).length(2),
});

export const deliveryPricingKmSchema = z.object({
  from: z.number(),
  to: z.number(),
  price: z.number(),
});

export const availabilitySchema = z.object({
  day: z.string().min(1, "Day is required"),
  openTime: z.string().min(1, "Open time is required"),
  closeTime: z.string().min(1, "Close time is required"),
});

export const createRestaurantSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
      "Password must contain uppercase, lowercase, number and special character",
    ),
  name: z.string().min(1, "Restaurant name is required"),
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
  type: z.nativeEnum(EnumRestaurantType),
  address: restaurantAddressSchema,
  location: restaurantLocationSchema,
  deliveryPricingKm: z.array(deliveryPricingKmSchema).optional(),
  availability: z.array(availabilitySchema).optional(),
});

export type CreateRestaurantDto = z.infer<typeof createRestaurantSchema>;
export type RestaurantAddressDto = z.infer<typeof restaurantAddressSchema>;
export type RestaurantLocationDto = z.infer<typeof restaurantLocationSchema>;
export type DeliveryPricingKmDto = z.infer<typeof deliveryPricingKmSchema>;
export type AvailabilityDto = z.infer<typeof availabilitySchema>;
