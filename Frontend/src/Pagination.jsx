import React from "react";

const PaginationComponent = ({ currentPage, totalPages, handleClick }) => {
  return (
    <div className="functionalButtonWrapper">
      <button onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : currentPage)} disabled={currentPage === 1} className="functionalNavButton">Previous</button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index} onClick={() => handleClick(index + 1)} className="functionalNumButton">{index + 1}</button>
      ))}
      <button onClick={() => handleClick(currentPage < totalPages ? currentPage + 1 : currentPage)} disabled={currentPage === totalPages} className="functionalNavButton">Next</button>
    </div>
  );
};

export default PaginationComponent;
