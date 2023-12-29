import React from "react";
import { Link } from "react-router-dom";

import useForm from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import "../../shared/style/Form.css";

const SignUp = (props) => {
  const [formState, inputChangeHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const signIn = (event) => {
    event.preventDefault();
    console.log("Signing up...");
    console.log(formState);
  };

  return (
    <form className="signup-form">
      <Input
        id="username"
        label="User Name"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid user name."
        onInput={inputChangeHandler}
      />
      <Input
        id="email"
        label="Email"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email address."
        onInput={inputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        element="input"
        type="password"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid password (mininum 6 characters)."
        onInput={inputChangeHandler}
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        element="input"
        type="password"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid password (mininum 6 characters)."
        onInput={inputChangeHandler}
      />

      <Button onClick={signIn} disabled={!formState.isValid}>
        Sign Up
      </Button>
      <p>
        Existing user? Click here to{" "}
        <Link onClick={props.toggleMode}>Sign In</Link>
      </p>
    </form>
  );
};

export default SignUp;
