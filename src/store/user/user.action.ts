import { USER_ACTION_TYPES, EmailAndPassword } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import {
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { UserData, AddicionalInfo } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSessionT = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type GoogleSignInStartT = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type SignInWithEmailStartT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START,
  EmailAndPassword
>;
export type SignInSucessT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCESS,
  UserData
>;
export type SignInFailedT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;
export type SignUpStartT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSucessT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCESS,
  { user: User; additionalDetails: AddicionalInfo }
>;
export type SignUpFailedT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;
export type SignOutStartT = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSucessT = Action<USER_ACTION_TYPES.SIGN_OUT_SUCESS>;
export type SignOutFailedT = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSessionT => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStartT => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const signInWithEmailStart = withMatcher(
  (email: string, password: string): SignInWithEmailStartT =>
    createAction(USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL_START, {
      email,
      password,
    })
);

export const signInSucess = withMatcher(
  (user: UserData & { id: string }): SignInSucessT =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCESS, user)
);

export const SignInFailed = withMatcher(
  (error: Error): SignInFailedT =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const SignUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStartT =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSucess = withMatcher(
  (user: User, additionalDetails: AddicionalInfo): SignUpSucessT =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailedT =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStartT => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSucess = withMatcher(
  (): SignOutSucessT => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailedT =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
