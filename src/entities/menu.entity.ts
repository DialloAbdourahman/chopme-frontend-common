import { ICategoryEntity } from "./category.entity";
import { IRestaurantEntity } from "./restaurant.entity";

// export type IMenuRating = {
//   average: number;
//   total: number;
// };

export type IMenu = {
  id: string;

  name: string;

  restaurant: IRestaurantEntity;

  category: ICategoryEntity;

  description?: string;

  coverImage?: string;

  pictures: string[];

  price: number;

  priceWithPlatformPercentage: number;

  available: boolean;

  // rating: IMenuRating;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date | null;
};
