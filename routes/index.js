const path = require("path");
const router = require("express").Router();

// API Routes
router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

  router
  .route("/books/:id")
  .delete(booksController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
