import { EnumUserRole } from "../enums/user-roles";

export interface IUserEntity {
  id: string;
  fullName: string;
  email: string;
  role: EnumUserRole;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
