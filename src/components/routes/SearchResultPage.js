import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "../ProductList";
import PaginationControls from "../Pagination";

const SearchResultPage = ({ products }) => {
  console.log("SearchResultPage Products:", products);

  const [currentPage, setCurrentPage] = useState(1);
  const { searchQuery } = useParams();
  const searchResults = products.filter(
    (product) =>
      product.en_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ko_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    console.log("SearchResultPage mounted or searchQuery changed");
  }, [searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productsPerPage = 10;
  const totalPages = Math.ceil(searchResults.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  console.log("Current Products:", currentProducts);

  return (
    <div>
      <h1 className="page-title m-5">Search Results for "{searchQuery}"</h1>
      {searchResults.length > 0 && (
        <>
          <ProductList products={currentProducts} />
          {totalPages > 1 && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
      {searchResults.length === 0 && <p>No results found</p>}
    </div>
  );
};

export default SearchResultPage;
