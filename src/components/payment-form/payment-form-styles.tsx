import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.form`
  height: 100px;
  min-width: 400px;
`;
export const StyledCard = styled(CardElement)`
  margin-block: 20px;
  padding: 4px;

  &:after {
    content: "";
    display: block;
    width: 400px;
    background-color: black;
    height: 2px;
  }
`;
