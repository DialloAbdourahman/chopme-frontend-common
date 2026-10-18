import { EnumRefundStatus } from "../enums/refund-statuses";

export interface IRefundDetails {
  refundId?: string;
  refundedTransactionId?: string;
  amount?: number;
  currencyCode?: string;
  status?: string;
  merchantRefundRef?: string;
  note?: string;
  reasonCode?: string;
  createdAt?: string;
  approvedAt?: string;
}

export interface IRefundWebhookDetails {
  webhookId?: string;
  refundId?: string;
  refundedTransactionId?: string;
  amount?: number;
  currencyCode?: string;
  status?: string;
  merchantRefundRef?: string;
  note?: string;
  reasonCode?: number;
  reason?: string;
  createdAt?: string;
  approvedAt?: string;
}

export interface IRefundEntity {
  id: string;

  orderId: string;

  status: EnumRefundStatus;

  refundDetails?: IRefundDetails;

  refundWebhookDetails?: IRefundWebhookDetails;

  createdAt: Date;
}
