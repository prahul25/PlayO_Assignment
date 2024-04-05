import React from "react";

const EntriesPerPageSelect = ({ entriesPerPage, handleEntriesPerPageChange }) => {
  return (
    <div className="entriesPerPageSelect">
      <label htmlFor="entriesPerPage">Show</label>
      <select id="entriesPerPage" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <label htmlFor="entriesPerPage">Entries</label>
    </div>
  );
};

export default EntriesPerPageSelect;
