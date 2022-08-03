import './checkout-item.styles.scss'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

const CheckoutItem = ({checkItem}) => {
    const { addItemToCart, removeQuantityOfItem, explodeItem } = useContext(CartProductsContext)
    const { name, price, quantity, imageUrl } = checkItem

    const decrease = () => removeQuantityOfItem(checkItem)
    const add = () => addItemToCart(checkItem)
    const exclude = () => explodeItem(checkItem)

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