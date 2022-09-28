import { signInAuthUserWithEmailandPassword } from "../../utils/firebase/firebase.utils";
import {
  googleSignInStart,
  signInWithEmailStart,
} from "../../store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserError,
  selectCurrentUser,
} from "../../store/user/user.selector";

import { ChangeEvent, useEffect, useState } from "react";

import FormImput from "../form-input/form-input.component";
import Button, { buttonTypeClasses } from "../button/button.component";

import { SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const userError = useSelector(selectUserError);
  const user = useSelector(selectCurrentUser);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (user) {
      alert("login sucessfull");
      return;
    }
    // if (userError) {
    //   switch (userError.code) {
    //     case "auth/wrong-password":
    //       alert("incorrect password");
    //       break;
    //     case "auth/user-not-found":
    //       alert("no user associated with this email");
    //       break;
    //     default:
    //       console.log("user login encountered an error" + userError);
    //   }
    // }
  }, [userError, user]);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetFormFields();
    dispatch(signInWithEmailStart(email, password));
  };

  const logGoogleUser = () => {
    dispatch(googleSignInStart());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <SignInContainer>
      <h1>I already have an account</h1>
      <h2>Sign in with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormImput
          required
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormImput
          required
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign In </Button>
          <Button
            type="button"
            buttonType={buttonTypeClasses.google}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
