import React, { useState, useEffect } from "react";
import SavedBook from "../../components/SavedBook/SavedBook";
// import axios from "axios";
import API from "../../utils/API";

const Saved = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    API.getBooks().then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Saved Books</h2>
      {books.map((book) => (
        <SavedBook
          key={book.id}
          id={book._id}
          title={book.title}
          author={book.authors}
          image={book.image}
          description={book.description}
          link={book.link}
        />
      ))}
    </div>
  );
};

export default Saved;
