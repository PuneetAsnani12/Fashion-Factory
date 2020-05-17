import { takeLatest, put, call, all } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";
import {
  updateCartItemsForSignedInUser,
  auth,
} from "../../firebase/firebase.utils";
import { signOutFailure, signOutSuccess } from "../user/users.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartOnSignOut({ payload: { currentUser, cartItems } }) {
  try {
    yield updateCartItemsForSignedInUser(currentUser, cartItems);
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
