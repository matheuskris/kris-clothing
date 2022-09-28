import { CART_PRODUCTS_ACTION_TYPES, CartItemT } from "./cart-products.types";
import { categoryItem } from "../categories/category.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type updateCartPayload = {
  cartItems: CartItemT[];
  total: number;
};

export type UpdateCartType = ActionWithPayload<
  CART_PRODUCTS_ACTION_TYPES.SET_CART_PRODUCTS,
  updateCartPayload
>;

export const updateCartItems = withMatcher(
  (newCartItems: CartItemT[]): UpdateCartType => {
    let newTotal: number;

    if (newCartItems !== undefined) {
      newTotal = newCartItems.reduce((total, item) => {
        const totalItem = item.quantity * item.price;
        return total + totalItem;
      }, 0);
    } else {
      newTotal = 0;
    }

    return createAction(CART_PRODUCTS_ACTION_TYPES.SET_CART_PRODUCTS, {
      cartItems: newCartItems,
      total: newTotal,
    });
  }
);

export const addCartItem = (
  cartItems: CartItemT[],
  productToAdd: categoryItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return updateCartItems(newCartItems);
  }
  const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  return updateCartItems(newCartItems);
};

export const decreaseQuantity = (
  cartItems: CartItemT[],
  productToDecrease: CartItemT
) => {
  if (productToDecrease.quantity > 1) {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    return updateCartItems(newCartItems);
  }
  return updateCartItems(cartItems);
};

export const excludeItem = (
  cartItems: CartItemT[],
  productToExclude: CartItemT
) => {
  const newCartItems = cartItems.filter(
    (value) => value.id !== productToExclude.id
  );
  return updateCartItems(newCartItems);
};

export type ToggleCartType = ActionWithPayload<
  CART_PRODUCTS_ACTION_TYPES,
  boolean
>;

export const toggleCartDropdown = withMatcher(
  (toggle: boolean): ToggleCartType => {
    return createAction(CART_PRODUCTS_ACTION_TYPES.TOGGLE_CART_DROP, toggle);
  }
);
