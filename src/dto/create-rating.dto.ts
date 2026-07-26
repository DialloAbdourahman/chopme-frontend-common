import { z } from "zod";

export const createRestaurantRatingSchema = z.object({
  rating: z
    .number({
      error: "Rating is required",
    })
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot be greater than 5"),

  comment: z.string().trim().min(1, "Comment is required"),
});

export type CreateRestaurantRatingDto = z.infer<
  typeof createRestaurantRatingSchema
>;
