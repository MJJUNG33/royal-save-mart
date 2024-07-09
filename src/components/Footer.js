import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Nav className="footer mt-3 justify-content-evenly px-md-5">
      <Nav.Item>
        <Link to="about-us" className="footer-item" aria-label="About Us Page">
          About Us
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="footer-item " aria-label="Contact Page">
          Contact
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/faqs" className="footer-item" aria-label="FAQs Page">
          FAQs
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/terms-and-conditions"
          className="footer-item"
          aria-label="Terms and Conditions Page"
        >
          Terms & Conditions
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
