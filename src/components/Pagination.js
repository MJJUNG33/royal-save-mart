import { Pagination } from "react-bootstrap";

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination className="mt-5 justify-content-center">
      <Pagination.Prev className="mx-3" onClick={handlePrevClick} />
      {[...Array(totalPages).keys()].map((number) => (
        <Pagination.Item
          key={number + 1}
          active={number + 1 === currentPage}
          onClick={() => onPageChange(number + 1)}
        >
          {number + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next className="mx-3" onClick={handleNextClick} />
    </Pagination>
  );
}
export default PaginationControls;
