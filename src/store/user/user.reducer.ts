import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSucess,
  signOutSucess,
  signUpFailed,
  signOutFailed,
  SignInFailed,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly error: Error | null;
};

export const INICIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

export const userReducer = (
  state = INICIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if (signInSucess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSucess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (
    signOutFailed.match(action) ||
    signUpFailed.match(action) ||
    SignInFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};
