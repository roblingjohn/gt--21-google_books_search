import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks({
      title: "Test",
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    let searchTerm = event.target.book.value;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=AIzaSyCVhgXo09d-7bytDAIYMHwCWeBDzDvWvHE`
      )
      .then((res) => {
        console.log(res.data.items[0].volumeInfo);
      });
  }
  return (
    <div>
      <form id="bookSearch" onSubmit={handleSubmit}>
        <input type="text" name="book" placeholder="Book Name" />
        <button id="searchBtn">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
