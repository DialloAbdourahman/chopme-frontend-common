import { EnumAuthType } from "../enums/auth-types";
import { EnumUserLanguage } from "../enums/user-language";
import { EnumUserRole } from "../enums/user-roles";

export interface IUserEntity {
  id: string;
  fullName: string;
  email: string;
  role: EnumUserRole;
  authType: EnumAuthType;
  language: EnumUserLanguage;
  createdAt: Date;
  deleted?: boolean;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
