import React, { useState } from "react";
import axios from "axios";
import SearchResults from "../../components/SearchResults/SearchResults";
import API from '../../utils/API'

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
    API.searchBooks(searchTerm)
      .then((res) => {
        setBooks(res.data.items);
      });
  }

  return (
    <div>
      <div className="container">
        <h2>Book Search</h2>
        <div className="row">
          <div className="col s5">
          <form id="bookSearch" onSubmit={handleSubmit}>
            <input type="text" name="book" placeholder="Book Name" />
            <button id="searchBtn">Search</button>
          </form>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Results</h3>
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
    </div>
  );
};

export default Search;
