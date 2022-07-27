import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

import './cart-icon.styles.scss'

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
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{totalQuantity}</span>
        </div>
    )
}

export default CartIcon