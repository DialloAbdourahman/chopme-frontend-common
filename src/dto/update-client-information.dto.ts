import { z } from "zod";

export const updateClientInformationSchema = z.object({
  phoneNumber: z
    .string()
    .regex(
      /^\+2376\d{8}$/,
      "Phone number must be a valid Cameroonian number in the format +237620487789",
    )
    .optional(),
});

export type UpdateClientInformationDto = z.infer<
  typeof updateClientInformationSchema
>;
