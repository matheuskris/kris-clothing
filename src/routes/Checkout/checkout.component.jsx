import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

const Checkout = () => {
    const { cartItems } = useContext(CartProductsContext)
    return(
        <div className="products-container">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
            <div>
                {cartItems.map((item) => {
                    return <CheckoutItem key={item.id} checkItem={item}></CheckoutItem>
                })}
            </div>
        </div>
    )
}

export default Checkout