import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

// import "./collection-item.styles.scss";
// import CustomButton from "../custom-button/custom-button.component";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  Button,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <Button onClick={() => addItem(item)} inverted>
        Add to Cart
      </Button>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
