import { createSelector } from 'reselect'

const selectCartReducer = (state) => state.cartProducts

export const selectCartItems = createSelector(
    [selectCartReducer],(cart) => cart.cartItems
)
export const selectToggle = createSelector(
    [selectCartReducer],(cart) => cart.toggle
)
export const selectTotal = createSelector(
    [selectCartReducer], (cart) => cart.total
)