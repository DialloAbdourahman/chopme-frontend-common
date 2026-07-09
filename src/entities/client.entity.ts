import { IUserEntity } from "./user.entity";

export interface IClientEntity {
  id?: string;

  address?: {
    country?: string;
    city?: string;
    longitude?: number;
    latitude?: number;
  };

  phoneNumber?: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export interface IClientWithUserEntity extends IClientEntity {
  user: IUserEntity;
}
