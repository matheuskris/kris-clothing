import { categoryItem } from "../categories/category.types";

export enum CART_PRODUCTS_ACTION_TYPES {
  SET_CART_PRODUCTS = "SET_CART_PRODUCTS",
  SET_TOTAL = "SET_TOTAL",
  TOGGLE_CART_DROP = "TOGGLE_CART_DROPDOWN",
}

export type CartItemT = categoryItem & {
  quantity: number;
};
