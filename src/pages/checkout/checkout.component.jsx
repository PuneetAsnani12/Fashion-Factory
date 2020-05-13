import React from "react";

// import "./checkout.styles.scss";
import {
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  CheckoutPageContainer,
  TotalContainer,
  StripeContainer,
  WarningContainer,
} from "./checkout.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/car.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalContainer className="total">
      <span>TOTAL:${total}</span>
    </TotalContainer>
    {total ? (
      <StripeContainer>
        <WarningContainer>
          *Please use the follwing test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 06/20 - CVV:123
        </WarningContainer>
        <StripeCheckoutButton price={total} />{" "}
      </StripeContainer>
    ) : (
      " "
    )}
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
