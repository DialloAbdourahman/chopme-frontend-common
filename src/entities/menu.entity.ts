import { ICategoryEntity } from "./category.entity";
import { IRestaurantEntity } from "./restaurant.entity";

export type MenuRating = {
  average: number;
  total: number;
};

export type Menu = {
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

  rating: MenuRating;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date | null;
};
