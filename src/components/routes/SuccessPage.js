import { Container, Button } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Success() {
  return (
    <Container className="d-flex flex-column align-items-center my-5 fw-bold">
      <CheckCircleFill color="#0BC935" size={20} />
      <h1>Thank you!</h1>
      <p>Your payment was successful.</p>
      <Button className="continue-shopping-btn mt-3">
        <Link to="/" className="text-white text-decoration-none p-3">
          Going to home
        </Link>
      </Button>
    </Container>
  );
}

export default Success;
