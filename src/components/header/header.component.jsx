import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/download.svg";
// import "./header.styles.scss";
// import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/car.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/users.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart, cartItems }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink
          as="div"
          onClick={() => signOutStart(currentUser, cartItems)}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}

      <CartIcon></CartIcon>
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: (currentUser, cartItems) =>
    dispatch(signOutStart({ currentUser, cartItems })),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
