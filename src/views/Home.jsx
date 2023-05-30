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
            <div className="d-flex flex-column text-white justify-content-center hd-txt-size">
              <h1 className="pt-5">¡Pizzería Mamma Mia!</h1>
              <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
              <hr></hr>
            </div>
          </Col>
          <Col lg="2"></Col>
        </Container>
      </div>
      <Container className="py-4">
        <CardComp />
      </Container>
    </>
  );
};

export default Home;
