import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { Context } from '../Context';

const Cart = () => {
  const { cartPizzas, irAHome, emptyCart, show, handleClose, handleShow } =
    useContext(Context);

  return (
    <>
      <Container className="nav-spc py-5">
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
                          onClick={(e) =>
                            console.log('-1 de: ', e.target.value)
                          }
                        >
                          -
                        </Button>{' '}
                        <span>6</span>{' '}
                        <Button
                          className="ms-1 fw-bold"
                          variant="outline-success"
                          value={p.id}
                          onClick={(e) =>
                            console.log('+1 de: ', e.target.value)
                          }
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
                <div className="d-flex justify-content-between">
                  <div>
                    <Button variant="success">Ir a pagar</Button>
                    <Button
                      variant="outline-success"
                      className="ms-2"
                      onClick={() => {
                        irAHome();
                      }}
                    >
                      Agregar otra pizza
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        emptyCart();
                      }}
                    >
                      Vaciar carro
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>¡Pizzería Mamma Mia!</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        El carro está vacío, presiona el botón para encontrar
                        las mejores pizzas
                      </Modal.Body>
                      <Modal.Footer className="d-flex justify-content-between">
                        <Button
                          variant="success"
                          onClick={() => {
                            handleClose();
                            irAHome();
                          }}
                        >
                          Ver pizzas
                        </Button>
                        <Button variant="outline-danger" onClick={handleClose}>
                          Cerrar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Cart;
