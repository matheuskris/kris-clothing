import { AnyAction } from "redux";
import { toggleCartDropdown, updateCartItems } from "./cart-products.action";
import { CART_PRODUCTS_ACTION_TYPES, CartItemT } from "./cart-products.types";

export type CartProductsState = {
  readonly cartItems: CartItemT[];
  readonly toggle: boolean;
  readonly total: number;
};

export const CART_PRODUCTS_INICIAL_STATE: CartProductsState = {
  cartItems: [],
  toggle: false,
  total: 0,
};

export const cartProductsReducer = (
  state = CART_PRODUCTS_INICIAL_STATE,
  action = {} as AnyAction
): CartProductsState => {
  if (updateCartItems.match(action)) {
    const { cartItems, total } = action.payload;
    return { ...state, cartItems, total };
  }
  if (toggleCartDropdown.match(action)) {
    return { ...state, toggle: action.payload };
  }
  return state;
};
