import React from "react";
import ProfileImg from "./Assets/Photo.png";

const TopBarWrapper = ({ searchByName, setSearchByName }) => {
  return (
    <div className="topBarWrapper">
      <div className="search-container">
        <i className="fa fa-search icon"></i>
        <input
          type="search"
          placeholder="Search by customer name..."
          value={searchByName}
          onChange={(e) => setSearchByName(e.target.value)}
          className="search-input"
        />
      </div>
      <img src={ProfileImg} alt="" />
    </div>
  );
};

export default TopBarWrapper;
