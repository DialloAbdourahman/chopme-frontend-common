import { ICategoryEntity } from "./category.entity";
import { IRestaurantEntity } from "./restaurant.entity";

// export type IMenuRating = {
//   average: number;
//   total: number;
// };

export type IMenuEntity = {
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

  ordersCount: number;

  createdAt: Date;

  updatedAt?: Date;

  deletedAt?: Date | null;

  deleted?: boolean;
};
