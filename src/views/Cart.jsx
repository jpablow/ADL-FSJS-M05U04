import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const Cart = () => {
  return (
    <>
      <Container className="nav-spc pb-5"></Container>
      <Container className="py-4 bg-light align-items-center">
        <Container>
          <h5>Detalles del pedido:</h5>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Container className="d-flex justify-content-between align-items-center">
                <div>
                  <Image
                    className="cart-img me-2"
                    src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                    rounded
                  />{' '}
                  <span>Salame</span>
                </div>
                <div className="d-flex align-items-center fw-bold">
                  <span className="text-success fw-normal">$35.940</span>
                  <Button
                    className="ms-3 me-1 fw-bold"
                    variant="outline-danger"
                  >
                    -
                  </Button>{' '}
                  <span>6</span>{' '}
                  <Button className="ms-1 fw-bold" variant="outline-success">
                    +
                  </Button>
                </div>
              </Container>
            </ListGroup.Item>
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
