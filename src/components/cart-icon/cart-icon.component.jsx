import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

import {
    CartIconContainer,
    ShopIcon,
    ItemCount
} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const { toggle, setToggle, cartItems} = useContext(CartProductsContext)
    const toggleCart = () => {
        if(toggle){
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity,0)

    return(
        <CartIconContainer onClick={toggleCart}>
            <ShopIcon className='shopping-icon'/>
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon