import { z } from "zod";

export const updateAddressSchema = z.object({
  longitude: z.number(),

  latitude: z.number(),

  country: z.string(),

  city: z.string(),
});

export type UpdateAddressDto = z.infer<typeof updateAddressSchema>;
