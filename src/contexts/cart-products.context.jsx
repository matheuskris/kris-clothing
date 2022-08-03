import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) => (
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        ))
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const decreaseQuantity = (cartItems, productToDecrease) => {
    if (productToDecrease.quantity>1){
        return cartItems.map((cartItem) => (
            cartItem.id === productToDecrease.id ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        ))
    }
    return cartItems
}

const excludeItem = (cartItems, productToExclude) => {
    return  cartItems.filter(value => value.id !== productToExclude.id)
}

export const CartProductsContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    toggle: false,
    setToggle: () => {},
    addQuantityOfItem: () => {},
    removeQuantityOfItem: () => {},
    explodeItem: () => {},
    total: {},
})

const INICIAL_STATE = {
    cartItems: [],
    toggle: false,
    total: 0,
}
const cartReducer = (state, action) =>{
    const { type, payload } = action
    switch (type){
        case 'SET_CART_ITEMS':
            const {cartItems, total} = payload
            return{...state, cartItems, total}
        case 'TOGGLE_CART':
            const { toggle } = payload
            return{...state, toggle}
        default:
            throw new Error(`unhandled type of ${type} in cart Reducer`)
    }
}

export const CartProductsProvider = ({children}) => {

    const [ {cartItems, toggle, total}, dispatch ] = useReducer(cartReducer, INICIAL_STATE)

    const setToggle = (newToggle) => {
        dispatch({
            type:'TOGGLE_CART',
            payload: {toggle: newToggle}
        })
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newTotal = newCartItems.reduce((total, item) => {
            const totalItem = item.quantity * item.price
            return total + totalItem
        }, 0)
        console.log(newCartItems)
        dispatch({
            type:'SET_CART_ITEMS',
            payload:{
                cartItems: newCartItems,
                total: newTotal
            }
        })
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeQuantityOfItem = (productToDecrease) => {
        const newCartItems = decreaseQuantity(cartItems, productToDecrease)
        updateCartItemsReducer(newCartItems)
    }

    const explodeItem = (productToExclude) => {
        const newCartItems = excludeItem(cartItems, productToExclude)
        updateCartItemsReducer(newCartItems)
    }

    const value = { 
        cartItems,
        addItemToCart, 
        toggle, 
        setToggle,
        removeQuantityOfItem,
        explodeItem,
        total
    }

    return(
        <CartProductsContext.Provider value={value}>{children}</CartProductsContext.Provider>
    )
}
