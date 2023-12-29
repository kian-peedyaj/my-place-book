import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./auth/pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
          <Route path="/places/:placeID" element={<UpdatePlace />}></Route>
          <Route path="/:userID/places" element={<UserPlaces />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="*" element={<h1>Oops! Page not found.</h1>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
