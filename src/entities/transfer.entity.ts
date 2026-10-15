import { EnumTransferDirection } from "../enums/transfer-direction";
import { EnumTransferStatuses } from "../enums/transfer-statuses";

export interface ITransferEntity {
  id: string;

  restaurantId: string;

  status: EnumTransferStatuses;

  amount: number;

  transferId: number;
  transferGroupId: string;
  transferDirection: EnumTransferDirection;

  platformTransferStatus?: EnumTransferStatuses;

  restaurantTransferStatus?: EnumTransferStatuses;

  totalOrders: number;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date | null;

  deleted?: boolean;
}
