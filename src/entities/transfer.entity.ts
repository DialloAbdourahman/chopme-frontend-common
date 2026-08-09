import { EnumTransferStatuses } from "../enums/transfer-statuses";

export interface ITransferEntity {
  id: string;

  restaurantId: string;

  status: EnumTransferStatuses;

  totalRestaurantAmount: number;

  totalPlatformAmount: number;

  transferId: number;

  platformTransferStatus?: EnumTransferStatuses;

  restaurantTransferStatus?: EnumTransferStatuses;

  totalOrders: number;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date | null;
  deleted?: boolean;
}
