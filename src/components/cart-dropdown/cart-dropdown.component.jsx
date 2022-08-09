import {
  CartDropdownContainer,
  CartItems,
  CartButton,
} from "./cart-dropdown.styles.jsx";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart-products/cart-products.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItems[0] ? (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))}
        </CartItems>
      ) : (
        <div className="empty-message">Your cart is empty</div>
      )}
      <CartButton onClick={goToCheckoutHandler}>Go to CheckOut</CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
