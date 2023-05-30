import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../Context';

export default function NavbarComp() {
  const { cartPizzas } = useContext(Context);

  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <span>🍕</span> Pizzería Mamma Mia!
        </Navbar.Brand>
        <Container className="text-end">
          <NavLink className="td-none text-white" to="/Cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge pill bg="warning" className="text-dark badge-pos">
              {cartPizzas.length}
            </Badge>{' '}
            Var Monto Cart
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
}
