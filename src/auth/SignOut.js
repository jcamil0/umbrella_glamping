import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../Firebase/index";

const SignOutButton = () => (
  <Button color="info" onClick={auth.doSignOut}>
    Sign Out
    {/* {console.log(auth.doSignOut)} */}
  </Button>
);

export default SignOutButton;
