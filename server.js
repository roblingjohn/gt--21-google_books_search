const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const booksController = require("./routes/api/books")

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use("/api", booksController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/google_books_search", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Epxress server running on http://localhost:${PORT}`);
});