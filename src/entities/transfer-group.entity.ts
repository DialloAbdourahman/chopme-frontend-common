import { EnumTranzakTopupStatus } from "../enums/tranzak-topup-status";

export interface ITransferGroupEntity {
  id: string;

  restaurantAmount: number;

  platformAmount: number;

  totalAmount: number;

  totalTopupAmount: number;

  transfers: string[];

  topupStatus?: EnumTranzakTopupStatus;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date | null;

  deleted: boolean;
}
