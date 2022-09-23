import { USER_ACTION_TYPES } from "./user.types";

export const INICIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = INICIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
