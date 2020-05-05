import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import Homepage from "./pages/homepage/homepage.component";
// import "./App.css";
import { GlobalStyle } from "./global.styles";
// import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import CheckoutPage from "./pages/checkout/checkout.component";

// import {
//   auth,
//   createUserProfileDocument,
//   /*addCollectionAndDocuments*/
// } from "./firebase/firebase.utils";
import { connect } from "react-redux";
// import { setCurrentUser } from "./redux/user/users.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { checkUserSession } from "./redux/user/users.actions";
import Spinner from "./components/spinner/spinner.component";

import ErrorBoundary from "./error-boundary/error-boundary.component";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // unsubscribeFromAuth = null;
  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // const { setCurrentUser} = this.props;
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data()
  //       });
  //     });
  //   } else {
  //     setCurrentUser(userAuth);
  //   }
  //   // addCollectionAndDocuments("collections", collectionsArray.map(({title,items})=>({title,items})));
  // });
  // }
  // componentWillUnmount() {
  //   // this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="./" /> : <SignInAndSignUpPage />
              }
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
