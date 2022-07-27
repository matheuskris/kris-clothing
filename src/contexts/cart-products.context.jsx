import { createContext, useState } from "react";

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
    const indexOfItem = cartItems.reduce((itemIndex, item) => {
        if(item.id === productToExclude.id){
            return itemIndex + cartItems.indexOf(item)
        }
        return 0
    }, 0)
    console.log(indexOfItem)
    return  cartItems.filter((value) => (cartItems.indexOf(value)!==indexOfItem))
}

export const CartProductsContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    toggle: false,
    setToggle: () => {},
    addQuantityOfItem: () => {},
    removeQuantityOfItem: () => {},
    explodeItem: () => {}
})

export const CartProductsProvider = ({children}) => {
    const [ cartItems, setCartItems ] = useState([])
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

    const value = { 
        cartItems, 
        addItemToCart, 
        toggle, 
        setToggle, 
        addQuantityOfItem,
        removeQuantityOfItem,
        explodeItem
    }

    return(
        <CartProductsContext.Provider value={value}>{children}</CartProductsContext.Provider>
    )
}
