import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
import AuthContext from "../../context/auth-context";
import Button from "../FormElements/Button";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {auth.isUserSignedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isUserSignedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isUserSignedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isUserSignedIn && (
        <li>
          <button onClick={auth.signOut}>SIGN OUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
