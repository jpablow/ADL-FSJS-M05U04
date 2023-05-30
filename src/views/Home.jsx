import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import CardComp from '../components/CardComp';

const Home = () => {
  return (
    <>
      <div className="nav-spc">
        <Container className="hd-img">
          <Col></Col>
          <Col className="align-center" md="auto">
            <div className="d-flex flex-column text-white justify-content-center">
              <h1>¡Pizzería Mamma Mia!</h1>
              <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
              <hr></hr>
            </div>
          </Col>
          <Col lg="2"></Col>
        </Container>
      </div>
      <Container className="mt-5">
        <CardComp />
      </Container>
    </>
  );
};

export default Home;
