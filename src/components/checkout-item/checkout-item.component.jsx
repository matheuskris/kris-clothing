import './checkout-item.styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart-products/cart-products.selector'
import { addCartItem, decreaseQuantity, excludeItem } from '../../store/cart-products/cart-products.action'

const CheckoutItem = ({checkItem}) => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const { name, price, quantity, imageUrl } = checkItem

    const decrease = () => dispatch(decreaseQuantity(cartItems, checkItem))
    const add = () => dispatch(addCartItem(cartItems, checkItem))
    const exclude = () => dispatch(excludeItem(cartItems, checkItem))

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <button className='arrow' onClick={decrease}>&#10094;</button>
                <span className='value'>{quantity}</span>
                <button className='arrow' onClick={add}>&#10095;</button>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={exclude}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem