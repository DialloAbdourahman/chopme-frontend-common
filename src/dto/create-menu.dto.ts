import { z } from "zod";

export const createMenuSchema = (roundToNearestFCFA = 5) =>
  z.object({
    name: z.string().min(1, "Menu name is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().optional(),
    price: z.coerce
      .number({ message: "Price must be a number" })
      .min(0, "Price must be at least 0")
      .refine((val) => val % roundToNearestFCFA === 0, {
        message: `Price must be divisible by ${roundToNearestFCFA}`,
      }),
    available: z.boolean().optional(),
  });

export type CreateMenuDto = z.infer<ReturnType<typeof createMenuSchema>>;
