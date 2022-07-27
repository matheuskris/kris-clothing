import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

import { Link } from "react-router-dom"

import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { toggle, cartItems} = useContext(CartProductsContext)
    
    return(
        <div className={`cart-dropdown-container ${toggle}`}>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}></CartItem>   
                ))}         
            </div>
            {/* <Button onClick={()=>{console.log(cartItems)}}>Go to CheckOut</Button> */}
            <Link to='checkout'><Button>Go to CheckOut</Button></Link>
        </div>
    )
}

export default CartDropdown