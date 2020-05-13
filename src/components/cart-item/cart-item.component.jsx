import React from "react";

// import "./cart-item.styles.scss";

import {
  ItemDetails,
  CartItemContainer,
  TextContainer,
} from "./cart-item.styles";

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item"></img>
    <ItemDetails>
      <TextContainer>{name}</TextContainer>
      <TextContainer>
        {quantity} x ${price}
      </TextContainer>
    </ItemDetails>
  </CartItemContainer>
);

export default React.memo(cartItem);
