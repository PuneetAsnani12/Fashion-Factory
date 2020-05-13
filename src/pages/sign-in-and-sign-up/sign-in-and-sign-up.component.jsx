import React from "react";

// import "./sign-in-and-sign-up.styles.scss";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
