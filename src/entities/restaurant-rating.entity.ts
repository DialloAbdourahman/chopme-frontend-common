export interface IRestaurantRatingEntity {
  id: string;

  publicUserName: string;

  rating: number;

  comment: string;

  createdAt: Date;

  updatedAt: Date;

  deleted?: boolean;
  deletedAt?: Date | null;
}
