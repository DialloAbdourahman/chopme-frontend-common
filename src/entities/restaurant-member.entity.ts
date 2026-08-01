import { EnumRestaurantMemberRole } from "../enums/restaurant-member-role";
import { IUserEntity } from "./user.entity";

export interface IRestaurantMemberEntity {
  id: string;
  role: EnumRestaurantMemberRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface IRestaurantMemberWithUserEntity extends IRestaurantMemberEntity {
  user: IUserEntity;
}
