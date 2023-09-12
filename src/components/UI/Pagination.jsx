import React, { useState } from "react";

const Pagination = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const nextPageButtonHandler = () => {
    setCurrentPage((prevpage) => {
      onPageChange(prevpage + 1);
      return prevpage + 1;
    });
  };
  const previousPageButtonHandler = () => {
    setCurrentPage((prevpage) => {
      onPageChange(prevpage - 1);
      return prevpage - 1;
    });
  };

  const renderPaginationButtons = () => {
    const pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } border border-gray-300 px-3 py-1 rounded-lg m-1 focus:outline-none hover:bg-blue-500 hover:text-white`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center space-x-2 mt-20">
      <button
        className={`${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "hover:bg-blue-500 hover:text-white"
        } border border-gray-300 px-3 py-1 rounded-lg m-1 focus:outline-none `}
        onClick={previousPageButtonHandler}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPaginationButtons()}
      <button
        className={`${
          currentPage === numberOfPages
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "hover:bg-blue-500 hover:text-white"
        } border border-gray-300 px-3 py-1 rounded-lg m-1 focus:outline-none `}
        onClick={nextPageButtonHandler}
        disabled={currentPage === numberOfPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
