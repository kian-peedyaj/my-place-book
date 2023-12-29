import React, { useCallback, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./auth/pages/Auth";
import AuthContext from "./shared/context/auth-context";

const App = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const signIn = useCallback(() => {
    setIsUserSignedIn(true);
  }, []);
  const signOut = useCallback(() => {
    setIsUserSignedIn(false);
  }, []);

  let MyRoutes = () => <></>;

  if (!isUserSignedIn) {
    MyRoutes = (props) => (
      <Routes {...props}>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userID/places" element={<UserPlaces />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Navigate to="/auth" />}></Route>
      </Routes>
    );
  } else {
    MyRoutes = (props) => (
      <Routes {...props}>
        <Route path="/" element={<Users />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="/places/:placeID" element={<UpdatePlace />}></Route>
        <Route path="/:userID/places" element={<UserPlaces />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isUserSignedIn,
        signOut,
        signIn,
      }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>{MyRoutes && <MyRoutes />}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
