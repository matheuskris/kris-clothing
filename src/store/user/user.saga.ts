import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";

import { USER_ACTION_TYPES } from "./user.types";
import {
  SignInWithEmailStartT,
  SignUpStartT,
  SignUpSucessT,
} from "./user.action";

import {
  signInSucess,
  SignInFailed,
  signUpFailed,
  signUpSucess,
  signOutSucess,
  signOutFailed,
} from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInwithGooglePopup,
  signInAuthUserWithEmailandPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AddicionalInfo,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  addicionalInfo?: AddicionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      addicionalInfo
    );
    if (userSnapshot) {
      yield* put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(SignInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(SignInFailed(error as Error));
  }
}

export function* tryToLogWithGoogle() {
  try {
    const { user } = yield* call(signInwithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(SignInFailed(error as Error));
  }
}

export function* tryToLogWithEmail({
  payload: { email, password },
}: SignInWithEmailStartT) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailandPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(SignInFailed(error as Error));
  }
}

export function* emailSignUp({
  payload: { email, password, displayName },
}: SignUpStartT) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSucess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSucessT) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* tryToSignOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSucess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, emailSignUp);
}

export function* onSignUpSucess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCESS, signInAfterSignUp);
}

export function* onSignInWithEmailStart() {
  yield* takeLatest(
    USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START,
    tryToLogWithEmail
  );
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, tryToLogWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, tryToSignOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onSignInWithEmailStart),
    call(onSignUpStart),
    call(onSignUpSucess),
    call(onSignOutStart),
  ]);
}
