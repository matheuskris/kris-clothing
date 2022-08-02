import {
    CartItemContainer,
    ItemImage,
    ItemDetails
} from './cart-item.styles.jsx'

const CartItem = ({cartItem}) => {
    const { name, quantity, price, imageUrl } = cartItem
    return(
        <CartItemContainer>
            <ItemImage src={imageUrl} alt="name" />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem