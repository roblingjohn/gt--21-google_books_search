import axios from "axios";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  // Gets all saved books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBooks: function (searchTerm) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=${API_KEY}`
    );
  },
};
