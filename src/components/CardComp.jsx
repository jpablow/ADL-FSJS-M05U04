import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

// pasar array al componente para el render en Home o en Detail
const CardComp = () => {
  return (
    <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="../Pizza_bg01.jpg" />
            <Card.Body>
              <Card.Title className="fs-4">Cuatro estaciones</Card.Title>
              <hr></hr>
              <Card.Subtitle className="fw-bold">Ingredientes:</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li className="d-flex mt-3">
                    <div className="pz-li">🍕</div> Mozzarella
                  </li>
                  <li className="d-flex">
                    <div className="pz-li">🍕</div> Tomates
                  </li>
                  <li className="d-flex">
                    <div className="pz-li">🍕</div> Jamón
                  </li>
                  <li className="d-flex">
                    <div className="pz-li">🍕</div> Orégano
                  </li>
                </ul>
              </Card.Text>
              <hr></hr>
              <Card.Title className="text-center fs-2 my-5">$5.950</Card.Title>
              <Container fluid className="d-flex justify-content-between">
                <Button variant="outline-success">
                  Ver más{'  '}
                  <FontAwesomeIcon className="ms-2" icon={faPizzaSlice} />
                </Button>
                <Button variant="success">
                  Añadir{'   '}
                  <FontAwesomeIcon className="ms-2" icon={faCartPlus} />
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardComp;
