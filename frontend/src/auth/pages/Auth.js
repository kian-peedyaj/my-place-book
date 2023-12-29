import React, { useState } from "react";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode((previousMode) => !previousMode);
  };

  const signUpForm = <SignUp toggleMode={toggleMode} />;
  const signInForm = <SignIn toggleMode={toggleMode} />;

  return isSignUpMode ? signUpForm : signInForm;
};

export default Auth;
