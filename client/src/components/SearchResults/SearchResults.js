import React from "react";
import BookResult from "../BookResult/BookResult";

const SearchResults = (props) => {
  return (
    <div className="container">
      <h3>Results</h3>
      <BookResult
        title={props.title}
        author={props.author}
        image={props.image}
        description={props.description}
        link={props.link}
      />
    </div>
  );
};

export default SearchResults;
