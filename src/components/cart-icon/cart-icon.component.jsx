import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { toggle, setToggle} = useContext(CartProductsContext)
    const toggleCart = () => {
        if(toggle){
            setToggle(false)
        } else {
            setToggle(true)
        }
    }
    return(
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>10</span>
        </div>
    )
}

export default CartIcon