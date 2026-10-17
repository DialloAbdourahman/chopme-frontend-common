import { EnumTransferDirection } from "../enums/transfer-direction";
import { EnumTransferStatuses } from "../enums/transfer-statuses";
import type { IRestaurantEntity } from "./restaurant.entity";
import type { ITransferGroupEntity } from "./transfer-group.entity";

export interface ITransferEntity {
  id: string;

  restaurantId: string;
  restaurant?: IRestaurantEntity;

  status: EnumTransferStatuses;

  amount: number;

  transferId?: string;
  transferGroupId: string;
  transferGroup?: ITransferGroupEntity;
  transferDirection: EnumTransferDirection;

  retriedFromTransferId?: string;

  totalOrders: number;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date | null;

  deleted?: boolean;
}
