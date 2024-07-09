import Filter from "../Filter";
import Sort from "../Sort";
import PaginationControls from "../Pagination";
import { useEffect, useState } from "react";
import ProductList from "../ProductList";

function NewArrivals({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recentlyAdded");
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
    const currentDate = new Date();
    const thirtyDaysAgo = new Date(currentDate);
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);

    let newFilteredProducts = products.filter((product) => {
      const productCreatedAt = new Date(product.createdAt);
      return productCreatedAt >= thirtyDaysAgo && product.special === false;
    });

    if (selectedBrand) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    if (selectedCategory && selectedCategory !== "all") {
      if (selectedCategory !== "newArrival") {
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
          return a.price - b.price;
        case "highToLow":
          return b.price - a.price;

        default:
          return 0;
      }
    });

    return sortedProducts;
  };
  const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  console.log("filteredProducts length:", filteredProducts.length);
  console.log("totalPages:", totalPages);
  console.log("currentProducts:", currentProducts);

  return (
    <>
      <h1 className="page-title">New Arrivals</h1>
      <div className="d-flex justify-content-between mx-4">
        <Filter
          categories={["New Arrival", "snack", "noodle", "sauce"]}
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
      <ProductList products={currentProducts} />

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default NewArrivals;
