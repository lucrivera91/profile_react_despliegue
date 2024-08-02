import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import userLogo from "../assets/userLogo.png";

export const Header = () => {
  return (
    <Navbar
      expand="md"
      sticky="top"
      className="bg-body-tertiary"
      data-bs-theme="light"
      collapseOnSelect
    >
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={userLogo}
              alt="userLogo"
              width="30"
              height="30"
              className="me-2"
            />
            Perfil de usuario
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-end" variant="underline">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Información Personal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/hobbies">
              <Nav.Link>Hobbies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
