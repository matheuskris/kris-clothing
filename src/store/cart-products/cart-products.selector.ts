import { createSelector } from "reselect";
import { CartProductsState } from "./cart-products.reducer";
import { RootReducer } from "../store";

const selectCartReducer = (state: RootReducer): CartProductsState =>
  state.cartProducts;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectToggle = createSelector(
  [selectCartReducer],
  (cart) => cart.toggle
);
export const selectTotal = createSelector(
  [selectCartReducer],
  (cart) => cart.total
);
