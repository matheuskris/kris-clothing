import './checkout-item.styles.scss'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

const CheckoutItem = ({checkItem}) => {
    const { addQuantityOfItem, removeQuantityOfItem, explodeItem } = useContext(CartProductsContext)
    const { name, price, quantity, imageUrl } = checkItem

    const decrease = () => removeQuantityOfItem(checkItem)
    const add = () => addQuantityOfItem(checkItem)
    const exclude = () => explodeItem(checkItem)

    return (
        <div className='check-item-container'>
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span><button onClick={decrease}>-</button>{quantity}<button onClick={add}>+</button></span>
            <span>{price*quantity}</span>
            <span><button onClick={exclude}>X</button></span>
        </div>
    )
}

export default CheckoutItem