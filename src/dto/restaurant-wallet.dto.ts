import { z } from "zod";
import { EnumNetwork } from "../enums/networks";
import { EnumWalletTypes } from "../enums/wallet-types";

export const mobileWalletDataInputSchema = z.object({
  network: z.nativeEnum(EnumNetwork),
  number: z
    .string()
    .regex(
      /^\+2376\d{8}$/,
      "Phone number must be a valid Cameroonian number in the format +237620487789",
    ),
});

export const addRestaurantWalletSchema = z.object({
  type: z.nativeEnum(EnumWalletTypes),
  mobileData: mobileWalletDataInputSchema.optional(),
});

export type MobileWalletDataInputDto = z.infer<
  typeof mobileWalletDataInputSchema
>;
export type AddRestaurantWalletDto = z.infer<typeof addRestaurantWalletSchema>;
