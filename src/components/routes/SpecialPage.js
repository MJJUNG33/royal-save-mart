import AddToCartButton from "../AddToCartButton";
import Filter from "../Filter";
import Sort from "../Sort";
import PaginationControls from "../Pagination";
import { Col, Row, Card, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";

function Special({ products }) {
  const specialProduct = products.filter((product) => product.special === true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(specialProduct);
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newFilteredProducts = filterProducts();

    if (!arraysEqual(newFilteredProducts, filteredProducts)) {
      setFilteredProducts(newFilteredProducts);
    }

    const sortedProducts = sortProducts(newFilteredProducts);
    setFilteredProducts(sortedProducts);
  }, [selectedBrand, selectedCategory, sortOption]);

  const filterProducts = () => {
    let newFilteredProducts = specialProduct;

    if (selectedBrand) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    if (selectedCategory && selectedCategory !== "all") {
      if (selectedCategory === "special") {
        newFilteredProducts = newFilteredProducts.filter(
          (product) => product.special
        );
      } else {
        newFilteredProducts = newFilteredProducts.filter(
          (product) => product.category === selectedCategory
        );
      }
    }

    return newFilteredProducts;
  };

  const sortProducts = (products) => {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
      switch (sortOption) {
        case "relevance":
          return sortedProducts;
        case "lowToHigh":
          return a.salePrice - b.salePrice;
        case "highToLow":
          return b.salePrice - a.salePrice;

        default:
          return 0;
      }
    });

    return sortedProducts;
  };

  const productsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <>
      <h1 className="page-title"> Special</h1>
      <div className="d-flex justify-content-between mx-4">
        <Filter
          categories={["New Arrival", "special", "noodle", "snack", "sauce"]}
          brands={[
            "crown",
            "lotte",
            "nongshim",
            "orion",
            "paldo",
            "samyang",
            "seoul food",
          ]}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
        />

        <Sort onSortChange={handleSortChange} />
      </div>

      <Row xs={1} md={2} lg={4} className="g-4 mx-1 my-2 m-xl-4">
        {currentProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3}>
            <Card className="d-flex flex-column p-1 product-card ">
              <Card.Body className="d-flex flex-column flex-1 justify-content-between">
                <Row>
                  <Col className="p-1">
                    <Badge bg="danger" className="special-badge">
                      Sale
                    </Badge>
                    <Card.Img
                      src={product.image}
                      alt={product.en_name}
                      className="img-fluid fixed-height-image"
                      loading="lazy"
                    />
                  </Col>
                  <Col className="p-1">
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
                      <Col xs={6} className="p-1">
                        <Card.Text className="fs-6 fw-bold text-danger ms-2">
                          ${product.salePrice}
                        </Card.Text>
                      </Col>
                      <Col xs={6} className="p-1">
                        <Card.Text
                          className="fs-6"
                          style={{ textDecoration: "line-through" }}
                        >
                          ${product.price}
                        </Card.Text>
                      </Col>
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
        ))}
      </Row>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Special;
