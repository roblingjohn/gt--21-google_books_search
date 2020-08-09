import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form id="bookSearch">
        <input type="text" name="book" />
        <button id="searchBtn">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
