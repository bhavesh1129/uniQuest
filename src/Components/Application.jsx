import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import AppOne from "./AppOne";
function Application() {
  const user = useContext(UserContext);
  return (
    user ?
      <AppOne />
      :
      <Router>
        <SignUp path="signUp" />
        <SignIn path="/" />
        <PasswordReset path="passwordReset" />
      </Router>

  );
}

export default Application;
