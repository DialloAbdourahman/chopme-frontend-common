import { EnumOrderStatus } from "../enums/order-status";
import { EnumOrderCancelledReason } from "../enums/order-cancelled-reason";
import { EnumRefundStatus } from "../enums/refund-statuses";

export interface IOrderItem {
  productId: string;
  quantity: number;
  originalPrice: number;
  priceWithPlatformPercentage: number;
}

export interface IOrderPricing {
  totalAmountCollected: number;
  totalAmountCollectedWithDelivery: number;
  restaurantAmount: number;
  restaurantAmountWithDelivery: number;
  deliveryFeeAmount: number;
  deliveryFeeAmountWithCollectionAndDisbursementPercentage: number;
  platformEarningsAmount: number;
}

export interface IOrderMetaData {
  platformPercentage: number;
  collectionPercentage: number;
  disbursementPercentage: number;
}

export interface IOrderPaymentDetails {
  link: string;
  requestId?: string;
  appId?: string;
}

export interface IOrderPaymentWebhookDetails {
  requestId?: string;
  transactionId?: string;
  partnerTransactionId?: string;
  mchTransactionRef?: string;
  transactionTime?: Date;
  amount?: number;
  currencyCode?: string;
  status?: string;
  transactionStatus?: string;
  mobileWalletNumber?: string;
  paymentMethod?: string;
  payerName?: string;
  payerFee?: number;
  netAmountPaid?: number;
  merchantFee?: number;
  netAmountReceived?: number;
  errorCode?: number;
  errorMessage?: string;
}

export interface IOrderRefundWebhookDetails {
  id?: number;
}

export interface IOrderClientLocation {
  type: "Point";
  coordinates: number[];
}

export interface IOrderStatusTransition {
  status: EnumOrderStatus;
  timestamp: Date;
}

export interface IOrderEntity {
  id: string;

  clientId: string;

  restaurantId: string;

  cancelledByRestaurantMemberId?: string;

  // transferGroupId?: string;

  status: EnumOrderStatus;

  refundStatus?: EnumRefundStatus;

  statusTransitions: IOrderStatusTransition[];

  items: IOrderItem[];

  orderCancelReason?: EnumOrderCancelledReason;

  pricing: IOrderPricing;

  metaData: IOrderMetaData;

  maxTimeToPayOrder?: Date | null;

  paidAt?: Date | null;

  failedPaymentAt?: Date | null;

  cancelledAt?: Date | null;

  paymentDetails?: IOrderPaymentDetails;

  paymentWebhookDetails?: IOrderPaymentWebhookDetails;

  refundWebhookDetails?: IOrderRefundWebhookDetails;

  clientLocation: IOrderClientLocation;

  distanceKm: number;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date | null;
  deleted?: boolean;
}
