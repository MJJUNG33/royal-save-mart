import { Card, Button, Table, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

function ProductDetailPage({ products }) {
  let { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <>
      <Card className="h-100 d-flex flex-column border-0 m-3 ">
        <Card.Body className="d-flex flex-column">
          <div className="d-md-none">
            <Card.Img
              src={`${process.env.PUBLIC_URL}/${product.image}?${Date.now()}`}
              alt={product.en_name}
              className="img-fluid"
              loading="lazy"
            />

            <Card.Title className="flex-shrink-1 fw-bold product-title">
              {product.en_name}
            </Card.Title>
            <Card.Title className="flex-shrink-1 fw-bold product-title">
              {product.ko_name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted flex-shrink-1">
              {product.description}
            </Card.Subtitle>
            <Card.Text className="flex-grow-1 overflow-auto fs-6 fw-bold">
              ${product.price}
            </Card.Text>

            <AddToCartButton
              product={product}
              className="mt-3 align-self-end w-100 fw-bold mt-xl-4"
            />
          </div>

          <div className="d-none d-md-flex m-5 flex-column">
            <Row className="gap-xl-5">
              <Col md={4} className="ps-xl-5">
                <Card.Img
                  src={`${process.env.PUBLIC_URL}/${
                    product.image
                  }?${Date.now()}`}
                  alt={product.en_name}
                  className="img-fluid p-2 ps-xl-5"
                  loading="lazy"
                />
              </Col>
              <Col md={6} className="mt-4 ps-5 ms-5">
                <Card.Title className=" fw-bold product-title">
                  {product.en_name}
                </Card.Title>
                <Card.Title className=" fw-bold product-title">
                  {product.ko_name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted my-xl-2">
                  {product.description}
                </Card.Subtitle>
                <Card.Text className="fs-6 fw-bold my-xl-3">
                  ${product.price}
                </Card.Text>
                <AddToCartButton
                  product={product}
                  className="mt-3 align-self-end w-100 fw-bold mt-xl-4"
                />
              </Col>
            </Row>
          </div>

          <Card.Text className="mt-5 mx-3 m-xl-5">
            The special thing about the instant noodles from Nong Shim in South
            Korea is the typical spiciness, which you have to like. In the
            practical cup variant, they make a delicious snack. It’s hard to
            find a better and cheaper way to feed yourself when you’re on the go
            or have little time to eat! Fans of these quick but tasty ramen
            noodles from the Far East have a good selection to choose from –
            such as the spicy beef-flavored Shin Noodles shown here. Specially
            blended flour for premium noodles is used to give the noodles a
            chewy texture. No.1 representative Ramyun in Korea made by Nongshim
            state-of-the-art facilities and technology. Contains Wheat, Soy,
            Pork, Eggs, Beef
          </Card.Text>
          {product.nutritionalInformation &&
            product.nutritionalInformation.nutrients && (
              <Table bordered className="mt-5">
                <thead>
                  <tr>
                    <th colSpan="3" className="text-center">
                      Nutritional Information
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="3">
                      Servings per package:
                      {product.nutritionalInformation.servingsPerPackage}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      Serving size:{" "}
                      {product.nutritionalInformation
                        ? product.nutritionalInformation.servingsPerPackage
                        : "N/A"}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th rowSpan="2" className="align-middle">
                      Nutrients
                    </th>
                    <th colSpan="2">Average Quantity</th>
                  </tr>
                  <tr>
                    <th>per Serving</th>
                    <th>per 100g</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.nutritionalInformation.nutrients).map(
                    ([nutrient, values]) => (
                      <tr key={nutrient}>
                        <td>{nutrient}</td>
                        <td>{values.perServing}</td>
                        <td>{values.per100g}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductDetailPage;
