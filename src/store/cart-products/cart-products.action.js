import { CART_PRODUCTS_ACTION_TYPES } from "./cart-products.types"
import { createAction } from '../../utils/reducer/reducer.utils'

const updateCartItems = (newCartItems) => {
    const newTotal = newCartItems.reduce((total, item) => {
        const totalItem = item.quantity * item.price
        return total + totalItem
    }, 0)
    return(createAction(CART_PRODUCTS_ACTION_TYPES.SET_CART_PRODUCTS, { cartItems: newCartItems, total: newTotal }))
}

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return updateCartItems(cartItems.map((cartItem) => (
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )))
    }
    return updateCartItems([...cartItems, {...productToAdd, quantity: 1}])
}

export const decreaseQuantity = (cartItems, productToDecrease) => {
    if (productToDecrease.quantity>1){
        return updateCartItems(cartItems.map((cartItem) => (
            cartItem.id === productToDecrease.id ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )))
    }
    return updateCartItems(cartItems)
}

export const excludeItem = (cartItems, productToExclude) => {
    return  updateCartItems(cartItems.filter(value => value.id !== productToExclude.id))
}

export const toggleCartDropdown = (toggle) => (
    createAction(CART_PRODUCTS_ACTION_TYPES.TOGGLE_CART_DROP, toggle)
)