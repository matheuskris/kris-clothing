import { QueryDocumentSnapshot } from "firebase/firestore";
import { User } from "firebase/auth";

export enum USER_ACTION_TYPES {
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START = "user/GOOGLE_SIGN_IN_START",
  SIGN_IN_WITH_EMAIL_START = "user/SIGN_IN_WITH_EMAIL_START",
  SIGN_IN_SUCESS = "user/SIGN_IN_SUCESS",
  SIGN_IN_FAILED = "user/SIGN_IN_FAILED",
  SIGN_UP_START = "user/SIGN_UP_START",
  SIGN_UP_SUCESS = "user/SIGN_UP_SUCESS",
  SIGN_UP_FAILED = "user/SIGN_UP_FAILED",
  SIGN_OUT_START = "user/SIGN_OUT_START",
  SIGN_OUT_SUCESS = "user/SIGN_OUT_SUCESS",
  SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED",
}

export type UserType = QueryDocumentSnapshot<User> & {
  id: string;
};

export type EmailAndPassword = {
  email: string;
  password: string;
};
