import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Router } from "react-router";
import * as routes from "../../constants/routes";

const navbar = () => {
  const style = {
    color: "#e2d4a8",
    fontWeight: "bold",
  };
  return (
    <Navbar className="justify-content-between" fixed="top" bg="white">
      <Container>
        <Navbar.Brand href="#top" style={style}>
          <img
            alt=""
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Umbrella Glamping
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href={routes.SIGN_UP}>Login</Nav.Link>
          <Nav.Link href={routes.SIGN_IN}>Registro</Nav.Link>
          <Nav.Link href="#rooms">Rooms</Nav.Link>
          <Nav.Link href="#about-us">sobre nosotros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navbar;
