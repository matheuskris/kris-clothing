import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectToggle } from '../../store/cart-products/cart-products.selector.js'
import { toggleCartDropdown } from '../../store/cart-products/cart-products.action'

import {
    CartIconContainer,
    ShopIcon,
    ItemCount
} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const dispatch = useDispatch()
    const toggle = useSelector(selectToggle)
    const cartItems = useSelector(selectCartItems)

    const toggleCart = () => {
        if(toggle){
            dispatch(toggleCartDropdown(false))
        } else {
            dispatch(toggleCartDropdown(true))
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