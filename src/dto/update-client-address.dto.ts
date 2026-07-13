import { z } from "zod";

export const updateAddressSchema = z.object({
  longitude: z.number(),

  latitude: z.number(),

  country: z.string().optional(),

  city: z.string().optional(),
});

export type UpdateAddressDto = z.infer<typeof updateAddressSchema>;
