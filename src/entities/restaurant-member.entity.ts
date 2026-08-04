import { EnumRestaurantMemberRole } from "../enums/restaurant-member-role";
import { IRestaurantEntity } from "./restaurant.entity";
import { IUserEntity } from "./user.entity";

export interface IRestaurantMemberEntity {
  id: string;
  restaurant: IRestaurantEntity;
  user: IUserEntity;
  role: EnumRestaurantMemberRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  deleted: boolean;
}
