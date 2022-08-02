import {
    CartDropdownContainer,
    CartItems,
    CartButton
} from './cart-dropdown.styles.jsx'
import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

import { useNavigate } from "react-router-dom"

import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { toggle, cartItems} = useContext(CartProductsContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer className={toggle}>
            {cartItems[0] ? (
                <CartItems>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}></CartItem>   
                    ))}         
                </CartItems>
            ):(
                <div className='empty-message'>Your cart is empty</div>
            )}
            <CartButton onClick={goToCheckoutHandler}>Go to CheckOut</CartButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown