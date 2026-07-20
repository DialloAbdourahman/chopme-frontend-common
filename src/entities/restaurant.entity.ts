import { EnumNetwork } from "../enums/networks";
import { EnumRestaurantType } from "../enums/restaurant-types";
import { EnumWalletTypes } from "../enums/wallet-types";

export interface IRestaurantAddress {
  country: string;
  city: string;
  countryCode: string;
  state?: string;
  longName?: string;
}

export interface IRestaurantLocation {
  type: "Point";
  coordinates: number[];
}

export interface IRestaurantRating {
  average: number;
  total: number;
}

export interface IRestaurantDeliveryPricingKm {
  from: number;
  to: number;
  price: number;
}

export interface IRestaurantAvailability {
  day: string;
  openTime: string;
  closeTime: string;
}

export interface IMobileWalletData {
  network: EnumNetwork;
  number: string;
}

export interface IRestaurantWallet {
  type: EnumWalletTypes;
  mobileData?: IMobileWalletData;
}

export interface IRestaurantEntity {
  id: string;

  name: string;
  slug: string;

  slogan?: string;
  description?: string;
  phone?: string;
  email?: string;

  type: EnumRestaurantType;

  address: IRestaurantAddress;

  location: IRestaurantLocation;

  rating: IRestaurantRating;

  totalViews: number;

  coverImage?: string;

  pictures: string[];

  deliveryPricingKm: IRestaurantDeliveryPricingKm[];

  isClosed: boolean;

  availability: IRestaurantAvailability[];

  distanceKm?: number;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
