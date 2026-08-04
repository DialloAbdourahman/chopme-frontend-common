import { EnumAuthType } from "../enums/auth-types";
import { EnumUserRole } from "../enums/user-roles";

export interface IUserEntity {
  id: string;
  fullName: string;
  email: string;
  role: EnumUserRole;
  authType: EnumAuthType;
  createdAt: Date;
  deleted?: boolean;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
