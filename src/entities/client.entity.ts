import { IAddressEntity } from "./address.entity";
import { IUserEntity } from "./user.entity";

export interface IClientEntity {
  id?: string;

  address?: IAddressEntity;

  phoneNumber?: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export interface IClientWithUserEntity extends IClientEntity {
  user: IUserEntity;
}

// Country and city are not optional anymore for the client.
