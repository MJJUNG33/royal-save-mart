import { Col, Row } from "react-bootstrap";
import {
  TelephoneFill,
  EnvelopePaperHeartFill,
  BuildingFill,
} from "react-bootstrap-icons";

function Contact() {
  return (
    <div className="contact">
      <h1 className="page-title">Contact</h1>
      <p className="page-title mt-0">We're here to help.</p>

      <Row className="contact-item align-items-start ms-5">
        <Col xs={4} md={5} className="text-end">
          <TelephoneFill />
        </Col>

        <Col xs={8} md={7} className="text-start">
          <p className="contact-item-title">Give us a call</p>
          <p className="contact-item-body">111-111-1111</p>
        </Col>
      </Row>

      <Row className="contact-item align-items-start ms-5">
        <Col xs={4} md={5} className="text-end">
          <EnvelopePaperHeartFill />
        </Col>
        <Col xs={8} md={7} className="text-start">
          <p className="contact-item-title">Email</p>
          <p className="contact-item-body">royalsavemart@gmail.com</p>
        </Col>
      </Row>

      <Row className="contact-item align-items-start ms-5">
        <Col xs={4} md={5} className="text-end">
          <BuildingFill />
        </Col>
        <Col xs={8} md={7} className="text-start">
          <p className="contact-item-title">Store</p>
          <p className="contact-item-body">Open 9am - 9pm 7 days</p>
          <p className="contact-item-body">147 Nelson street, </p>
          <p className="contact-item-body">Auckland Central,</p>
          <p className="contact-item-body">Auckland, 1010 </p>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
