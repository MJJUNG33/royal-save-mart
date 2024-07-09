import "./Header.css";
import { List, Cart, Search } from "react-bootstrap-icons";
import {
  Container,
  Navbar,
  Form,
  Offcanvas,
  Nav,
  NavDropdown,
  Col,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header({ products }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const cartItems = useSelector((state) => state.cartItems);
  const count = cartItems.reduce((sum, product) => sum + product.count, 0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Search Results:", searchResults);
  }, [searchResults]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = performSearch(query);
    setSearchResults(results);
  };

  const performSearch = (query) => {
    const results = products.filter(
      (product) =>
        product.en_name.toLowerCase().includes(query.toLowerCase()) ||
        product.ko_name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    );
    navigate(`products/search-result/${query}`);
    return results;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const results = performSearch(searchQuery);
    setSearchResults(results);
  };

  const handleCategoryClick = (category) => {
    handleClose();
    navigate(`products/${category.toLowerCase()}`);
  };

  return (
    <>
      <Navbar className="p-0 ">
        <Container className="align-items-center mt-1 mb-3 p-xl-0">
          <Col>
            <List
              onClick={handleShow}
              className="menu-icon d-flex justify-content-start"
            />
          </Col>
          <Col>
            <Navbar.Brand href="/" className="d-flex justify-content-center">
              <img
                src="/images/Logo.png"
                alt="royal save mart logo"
                width="120"
                height="50"
                title="Royal Save Mart - Online Korean Grocery Shop"
                loading="lazy"
              />
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Collapse className="d-flex justify-content-end me-1">
              <Nav.Link href="/cart" className="position-relative">
                <Cart
                  className="cart-icon"
                  href="/cart"
                  aria-label={`Cart with ${count} items`}
                />
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle rounded-circle"
                  >
                    {count}
                  </Badge>
                )}
              </Nav.Link>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
      <Navbar className="bottom-navBar">
        <Container className="justify-content-center">
          <Form className="search" onSubmit={handleSearchSubmit}>
            <InputGroup className="mb-2">
              <Form.Label htmlFor="search" visuallyHidden>
                Search for product
              </Form.Label>
              <Form.Control
                type="search"
                placeholder="Search for product"
                aria-label="Search for product"
                className="search-bar"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <InputGroup.Text className="search-bar">
                {" "}
                <Search className="search-icon" />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
      <Container>
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <List className="me-3" />
              All Categories
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="pe-3 d-block" placement="start">
              <Nav.Link href="/products">All products</Nav.Link>
              <Nav.Link href="/new-arrival">New Arrival</Nav.Link>
              <Nav.Link href="/special">Special</Nav.Link>

              <NavDropdown title="Noodle">
                <NavDropdown.Item onClick={() => handleCategoryClick("noodle")}>
                  All noodles
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryClick("nongshim")}
                >
                  Nongshim
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleCategoryClick("paldo")}>
                  Paldo
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryClick("samyang")}
                >
                  Samyang
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Sauce">
                <NavDropdown.Item href="#">Nongshim</NavDropdown.Item>
                <NavDropdown.Item href="#">Paldo</NavDropdown.Item>
                <NavDropdown.Item href="#">Samyang</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Snack">
                <NavDropdown.Item onClick={() => handleCategoryClick("snack")}>
                  All Snacks
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Nongshim</NavDropdown.Item>
                <NavDropdown.Item href="#">Paldo</NavDropdown.Item>
                <NavDropdown.Item href="#">Samyang</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default Header;
