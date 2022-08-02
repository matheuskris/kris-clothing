import { createContext, useState, useEffect } from "react";

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

const addQuantity = (cartItems, productToAdd) => {
    return cartItems.map((cartItem) => (
        cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity +1}
        : cartItem
    ))
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

export const CartProductsProvider = ({children}) => {
    const [ cartItems, setCartItems ] = useState([])
    const [ total, setTotal ] = useState(0)
    const [ toggle, setToggle ] = useState(false)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const addQuantityOfItem = (productToAdd) => {
        setCartItems(addQuantity(cartItems, productToAdd))
    }
    const removeQuantityOfItem = (productToDecrease) => {
        setCartItems(decreaseQuantity(cartItems, productToDecrease))
    }
    const explodeItem = (productToExclude) => {
        setCartItems(excludeItem(cartItems, productToExclude))
    }
    useEffect(()=>{
        const newTotal = cartItems.reduce((total, item) => {
            const totalItem = item.quantity*item.price
            return total + totalItem
        }, 0)
        setTotal(newTotal)
    }, [cartItems])

    const value = { 
        cartItems, 
        addItemToCart, 
        toggle, 
        setToggle, 
        addQuantityOfItem,
        removeQuantityOfItem,
        explodeItem,
        total
    }

    return(
        <CartProductsContext.Provider value={value}>{children}</CartProductsContext.Provider>
    )
}
