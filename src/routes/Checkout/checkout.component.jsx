import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

const Checkout = () => {
    const { cartItems, total } = useContext(CartProductsContext)
    return(
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className="header-block"><span>Product</span></div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {cartItems.map((item) => {
                return <CheckoutItem key={item.id} checkItem={item}></CheckoutItem>
            })}
            <span className='total'>Total: R${total}</span>
        </div>
    )
}

export default Checkout