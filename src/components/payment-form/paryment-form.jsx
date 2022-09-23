import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectTotal } from "../../store/cart-products/cart-products.selector";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, { buttonTypeClasses } from "../button/button.component";
import { FormContainer, PaymentContainer } from "./payment-form-styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector(selectCurrentUser);
  const amount = useSelector(selectTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    setIsProcessingPayment(false);

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment Sucessfull");
      }
    }
  };

  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          isLoading={isProcessingPayment}
          buttonType={buttonTypeClasses.inverted}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentContainer>
  );
};

export default PaymentForm;
