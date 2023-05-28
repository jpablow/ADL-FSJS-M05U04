import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function NavbarComp() {
  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <span>🍕</span> Pizzería Mamma Mia!
        </Navbar.Brand>
        <Container className="text-end">
          <NavLink className="td-none text-white" to="/Cart">
            <FontAwesomeIcon icon={faCartShopping} /> Var Monto Cart
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
}
