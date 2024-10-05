import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo.png'; // replace with your logo path

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-responsive">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40" // You can adjust the size
            height="40"
            className="d-inline-block align-top"
            alt="AR Home Design Logo"
          />{' '}
          <span className="ml-2">AR Home Design</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ar">AR Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

