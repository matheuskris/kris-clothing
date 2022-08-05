import './product-card.styles.scss'
import Button from '../button/button.component'

import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart-products/cart-products.selector'
import { addCartItem } from '../../store/cart-products/cart-products.action'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const { name, price, imageUrl } = product

    const addProductToCart = () => dispatch(addCartItem( cartItems, product))

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard