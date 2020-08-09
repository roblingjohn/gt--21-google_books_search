import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

const Search = () => {
  return (
    <div className="container">
      <div className="container">
        <h2>Book Search</h2>
        <h3>Book</h3>
        <SearchBar />
      </div>
      <SearchResults />
    </div>
  );
};

export default Search;
