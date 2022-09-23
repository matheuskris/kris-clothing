import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotal,
} from "../../store/cart-products/cart-products.selector";
import PaymentForm from "../../components/payment-form/paryment-form";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} checkItem={item}></CheckoutItem>;
      })}
      <span className="total">Total: R${total}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
