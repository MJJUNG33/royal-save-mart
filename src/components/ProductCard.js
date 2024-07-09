import { Card, Row, Col } from "react-bootstrap";
import AddToCartButton from "./AddToCartButton";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Col key={product.id} xs={12} md={6} lg={3}>
      <Card className="d-flex flex-column p-1 product-card ">
        <Card.Body className="d-flex flex-column flex-1 justify-content-between">
          <Row onClick={() => navigate(`products/detail/${product.id}`)}>
            <Col xs={4} className="p-1">
              <Card.Img
                src={product.image}
                alt={product.en_name}
                className="img-fluid fixed-height-image"
                loading="lazy"
              />
            </Col>
            <Col xs={8} md={7} className="p-1">
              <Card.Title className="flex-shrink-1 fw-bold product-title">
                {product.en_name}
              </Card.Title>
              <Card.Title className="flex-shrink-1 fw-bold product-title">
                {product.ko_name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted flex-shrink-1">
                {product.description}
              </Card.Subtitle>
              <Row className="align-items-end">
                <Card.Text className="fs-6 fw-bold">${product.price}</Card.Text>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddToCartButton product={product} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
