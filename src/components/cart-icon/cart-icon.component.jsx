import React from "react";

// import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBagsvg.svg";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

// import "./cart-icon.styles.scss";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/car.selectors";

import { createStructuredSelector } from "reselect";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
