import React from "react";
import { Navbar, Container, Link, NavDropdown, Nav } from "react-bootstrap";

function Footer(){
  return (
    <Navbar fixed="bottom" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white footer-text" href="#home">Designed & Developed by Khumo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
