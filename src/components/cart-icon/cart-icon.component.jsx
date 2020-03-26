import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBagsvg.svg";

import "./cart-icon.styles.scss";

import { connect } from "react-redux";

import { toggleCardHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCardHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);