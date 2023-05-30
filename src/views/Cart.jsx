import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { useContext } from 'react';
import { Context } from '../Context';

const Cart = () => {
  const { cartPizzas } = useContext(Context);

  return (
    <>
      <Container className="nav-spc pb-5"></Container>
      <Container className="py-4 bg-light align-items-center">
        <Container>
          <h5>Detalles del pedido:</h5>
          <ListGroup variant="flush">
            {cartPizzas.map((p) => {
              return (
                <ListGroup.Item key={p.id}>
                  <Container className="d-flex justify-content-between align-items-center">
                    <div>
                      <Image className="cart-img me-2" src={p.img} rounded />{' '}
                      <span style={{ textTransform: 'capitalize' }}>
                        {p.name}
                      </span>
                    </div>
                    <div className="d-flex align-items-center fw-bold">
                      <span className="text-success fw-normal">$35.940</span>
                      <Button
                        className="ms-3 me-1 fw-bold"
                        variant="outline-danger"
                        value={p.id}
                        onClick={(e) => console.log('-1 de: ', e.target.value)}
                      >
                        -
                      </Button>{' '}
                      <span>6</span>{' '}
                      <Button
                        className="ms-1 fw-bold"
                        variant="outline-success"
                        value={p.id}
                        onClick={(e) => console.log('+1 de: ', e.target.value)}
                      >
                        +
                      </Button>
                    </div>
                  </Container>
                </ListGroup.Item>
              );
            })}

            <ListGroupItem className="py-3">
              <h4>Total: $134.640</h4>
              <Button variant="success">Ir a pagar</Button>
            </ListGroupItem>
          </ListGroup>
        </Container>
      </Container>
    </>
  );
};

export default Cart;
