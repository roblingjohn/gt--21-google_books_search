import React from "react";
import BookResult from "../BookResult/BookResult";

const SearchResults = (props) => {
  return (
    <div>
      <BookResult
        key={props.id}
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
