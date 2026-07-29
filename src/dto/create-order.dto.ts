import { z } from "zod";

export const createOrderSchema = z.object({
  restaurantId: z.string().min(1, "Restaurant is required"),

  items: z
    .array(
      z.object({
        productId: z.string().min(1, "Menu item is required"),
        quantity: z.number().int().min(1, "Quantity must be at least 1"),
      }),
    )
    .min(1, "At least one item is required"),
});

export type CreateOrderDto = z.infer<typeof createOrderSchema>;
