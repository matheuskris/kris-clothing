import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { RootReducer } from "../store";

export const selectUserReducer = (state: RootReducer): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

export const selectUserError = createSelector(
  selectUserReducer,
  (user) => user.error
);
