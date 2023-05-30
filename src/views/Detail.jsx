import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { useContext } from 'react';
import { Context } from '../Context';

const Detail = () => {
  const { selectedPizza, anhadirPizza } = useContext(Context);
  console.log(selectedPizza);

  return (
    <Container className="nav-spc pt-5">
      <Row>
        <Col></Col>
        <Col md="auto">
          {selectedPizza.map((p) => {
            return (
              <Container className="cust-card" key={p.id}>
                <Container>
                  <Image src={p.img} rounded fluid />
                </Container>

                <Container>
                  <h2 style={{ textTransform: 'capitalize' }}>{p.name}</h2>
                  <hr></hr>
                  <p>{p.desc}</p>
                  <h4>Ingredientes:</h4>
                  <ul>
                    {p.ingredients.map((ing, i) => (
                      <li
                        className="d-flex mt-3"
                        style={{ textTransform: 'capitalize' }}
                        key={i}
                      >
                        <div className="pz-li">🍕</div> {ing}
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="my-0">Precio: ${p.price}</h3>
                    <Button
                      className="text-center"
                      variant="success"
                      value={p.id}
                      onClick={(e) => anhadirPizza(e.target.value)}
                    >
                      Añadir{'   '}
                      <FontAwesomeIcon className="ms-2" icon={faCartPlus} />
                    </Button>
                  </div>
                </Container>
              </Container>
            );
          })}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Detail;
