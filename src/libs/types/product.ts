import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: Number;
  productLeftCount: Number;
  productSize: ProductSize;
  prosuctVolume: number;
  productDesc?: String;
  productImages: String[];
  productViews: Number;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: Number;
  productLeftCount: Number;
  productSize?: ProductSize;
  prosuctVolume?: number;
  productDesc?: String;
  productImages?: String[];
  productViews?: Number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: String;
  productPrice?: Number;
  productLeftCount?: Number;
  productSize?: ProductSize;
  prosuctVolume?: number;
  productDesc?: String;
  productImages?: String[];
  productViews?: Number;
}
