import { CartItemContainer, ItemImage, ItemDetails } from "./cart-item.styles";
import { CartItemT } from "../../store/cart-products/cart-products.types.js";

type CartProps = {
  cartItem: CartItemT;
};

const CartItem = ({ cartItem }: CartProps) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt="name" />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
