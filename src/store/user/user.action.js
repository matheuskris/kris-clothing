import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const signInWithEmailStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START, { email, password });

export const signInSucess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCESS, user);

export const SignInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const SignUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSucess = (user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSucess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
