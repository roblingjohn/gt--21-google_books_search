import React from "react";
import BookResult from "../BookResult/BookResult";

const SearchResults = () => {
  return (
    <div className="container">
      <h3>Results</h3>
      <BookResult
        title="Title"
        author="Book Author"
        image="https://www.placecage.com/140/100"
        description="Book description goes here."
      />
    </div>
  );
};

export default SearchResults;
