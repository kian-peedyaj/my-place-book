import { createContext } from "react";

const AuthContext = createContext({
  isUserSignedIn: false,
  signOut: () => {},
  signIn: () => {},
});

export default AuthContext;
