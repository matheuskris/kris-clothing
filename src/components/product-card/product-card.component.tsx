import { CardContainer, CardFooter } from "./product-card.styles";
import Button, { buttonTypeClasses } from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart-products/cart-products.selector";
import { addCartItem } from "../../store/cart-products/cart-products.action";
import { categoryItem } from "../../store/categories/category.types.js";

type ProductCardProps = {
  product: categoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addCartItem(cartItems, product));

  return (
    <CardContainer>
      <img src={imageUrl} alt={name} />
      <CardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CardFooter>
      <Button
        buttonType={buttonTypeClasses.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
