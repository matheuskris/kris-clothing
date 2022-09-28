import {
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart-products/cart-products.selector";
import {
  addCartItem,
  decreaseQuantity,
  excludeItem,
} from "../../store/cart-products/cart-products.action";
import { CartItemT } from "../../store/cart-products/cart-products.types";

type checkItemProps = {
  checkItem: CartItemT;
};

const CheckoutItem = ({ checkItem }: checkItemProps) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, price, quantity, imageUrl } = checkItem;

  const decrease = () => dispatch(decreaseQuantity(cartItems, checkItem));
  const add = () => dispatch(addCartItem(cartItems, checkItem));
  const exclude = () => dispatch(excludeItem(cartItems, checkItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <Arrow onClick={decrease}>&#10094;</Arrow>
        <span className="value">{quantity}</span>
        <Arrow onClick={add}>&#10095;</Arrow>
      </span>
      <span className="price">{price}</span>
      <RemoveButton onClick={exclude}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
