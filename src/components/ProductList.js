import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Carousels from "./Carousels";
import { useLocation } from "react-router-dom";

function ProductList({ products }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Carousels />}
      <Row xs={1} md={2} lg={4} className="g-4 mx-1 my-2 m-xl-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </>
  );
}

export default ProductList;
