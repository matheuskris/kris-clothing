import { CART_PRODUCTS_ACTION_TYPES } from "./cart-products.types";

export const CART_PRODUCTS_INICIAL_STATE = {
  cartItems: [],
  toggle: false,
  total: 0,
};

export const cartProductsReducer = (
  state = CART_PRODUCTS_INICIAL_STATE,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CART_PRODUCTS_ACTION_TYPES.SET_CART_PRODUCTS:
      const { cartItems, total } = payload;
      return { ...state, cartItems, total };
    case CART_PRODUCTS_ACTION_TYPES.TOGGLE_CART_DROP:
      return { ...state, toggle: payload };
    default:
      return state;
  }
};
