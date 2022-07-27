import './product-card.styles.scss'
import Button from '../button/button.component'

import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartProductsContext)
    const { name, price, imageUrl } = product

    const addProductToCart = () => addItemToCart(product)

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