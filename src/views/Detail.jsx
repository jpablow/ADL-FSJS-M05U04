import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';

const Detail = () => {
  return (
    <Container className="nav-spc pt-5">
      <Row>
        <Col></Col>
        <Col md="auto">
          <Container className="cust-card">
            <Container>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                rounded
                fluid
              />
            </Container>

            <Container>
              <h2>Cuatro estaciones</h2>
              <hr></hr>
              <p>
                La pizza napolitana, de masa tierna y delgada pero bordes altos,
                es la versión propia de la cocina napolitana de la pizza
                redonda. El término pizza napoletana, por su importancia
                histórica o regional, se emplea en algunas zonas como sinónimo
                de pizza tonda.
              </p>
              <h4>Ingredientes:</h4>
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
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-0">Precio: $5.990</h3>
                <Button className="text-center" variant="success">
                  Añadir{'   '}
                  <FontAwesomeIcon className="ms-2" icon={faCartPlus} />
                </Button>
              </div>
            </Container>
          </Container>
          {/* <Card className="">
            <Card.Img className="" variant="top" src="../Pizza_bg01.jpg" />
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
          </Card> */}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Detail;
