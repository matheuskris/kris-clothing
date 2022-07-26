import { createContext, useState } from "react";

export const CartProductsContext = createContext({
    cartProducts: [],
    setCartProducts: () => [],
    toggle: false,
    setToggle: () => {},
})

export const CartProductsProvider = ({children}) => {
    const [ cartProducts, setCartProducts ] = useState([])
    const [ toggle, setToggle ] = useState(false)
    const value = { cartProducts, setCartProducts, toggle, setToggle }
    return(
        <CartProductsContext.Provider value={value}>{children}</CartProductsContext.Provider>
    )
}