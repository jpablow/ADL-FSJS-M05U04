import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export default function NavbarComp() {
  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <span>🍕</span> Pizzería Mamma Mia!
        </Navbar.Brand>
        <Container className="text-end">
          <NavLink to="/">
            <span>🛒</span> Var Monto Cart
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
}
