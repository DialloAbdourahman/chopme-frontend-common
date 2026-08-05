import { z } from "zod";
import { EnumWalletTypes } from "../enums/wallet-types";

export const addRestaurantWalletSchema = z.object({
  type: z.nativeEnum(EnumWalletTypes),
  number: z
    .string()
    .regex(
      /^\+2376\d{8}$/,
      "Phone number must be a valid Cameroonian number in the format +237620487789",
    )
    .optional(),
});

export type AddRestaurantWalletDto = z.infer<typeof addRestaurantWalletSchema>;
