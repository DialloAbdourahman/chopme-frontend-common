import { IUserEntity } from "./user.entity";

export interface IAuthEntity {
  accessToken: string;
  refreshToken: string;
  user: IUserEntity;
}
