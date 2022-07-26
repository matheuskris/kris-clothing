import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { CartProductsContext } from '../../contexts/cart-products.context'

const CartDropdown = () => {
    const { toggle } = useContext(CartProductsContext)
    return(
        <div className={`cart-dropdown-container ${toggle}`}>
            <div className='cart-itens'>
                empty
            </div>
            <Button>Go to CheckOut</Button>
        </div>
    )
}

export default CartDropdown