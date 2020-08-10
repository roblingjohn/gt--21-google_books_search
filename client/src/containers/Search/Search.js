import React, { useState } from "react";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";

const Search = () => {
  const [books, setBooks] = useState([]);
  //   useEffect(() => {
  //     setBooks({
  //       title: "Test",
  //     });
  //   }, []);

  function handleSubmit(event) {
    event.preventDefault();
    let searchTerm = event.target.book.value;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=AIzaSyCVhgXo09d-7bytDAIYMHwCWeBDzDvWvHE`
      )
      .then((res) => {
        setBooks(res.data.items);
      });
  }

  return (
    <div className="container">
      <div className="container">
        <h2>Book Search</h2>
        <div>
          <form id="bookSearch" onSubmit={handleSubmit}>
            <input type="text" name="book" placeholder="Book Name" />
            <button id="searchBtn">Search</button>
          </form>
        </div>
      </div>
      {books.map((book) => (
        <SearchResults
          id={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks.thumbnail}
          description={book.volumeInfo.description}
          link={book.accessInfo.webReaderLink}
        />
      ))}
    </div>
  );
};

export default Search;
