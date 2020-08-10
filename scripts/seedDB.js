const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google_books_search"
);

const bookSeed = [
  {
    title: "From Homer to Harry Potter",
    author: ["Matthew Dickerson", "David O’Hara"],
    description:
      "The allure of fantasy continues to grow with film adaptations of The Lord of the Rings and J. K. Rowling's Harry Potter series. But how should Christians approach modern works of fantasy, especially debated points such as magic and witches? From Homer to Harry Potter provides the historical background readers need to understand this timeless genre. It explores the influence of biblical narrative, Greek mythology, and Arthurian legend on modern fantasy and reveals how the fantastic offers profound insights into truth. The authors draw from a Christian viewpoint informed by C. S. Lewis and J. R. R. Tolkien to assess modern authors such as Philip Pullman, Walter Wangerin, and J. K. Rowling. This accessible book guides undergraduate students, pastors, and lay readers to a more astute and rewarding reading of all fantasy literature.",
    image:
      "http://books.google.com/books/content?id=eEgC3bS4dOwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://www.googleapis.com/books/v1/volumes/eEgC3bS4dOwC",
  },
  {
    title: "Harry Potter and Convergence Culture",
    author: ["Amanda Firestone", "Leisa A. Clark"],
    description:
      'Since the 1997 publication of the first Harry Potter novel, the "Potterverse" has seen the addition of eight feature films (with a ninth in production), the creation of the interactive Pottermore© website, the release of myriad video games, the construction of the Wizarding World of Harry Potter at Universal Studios, several companion books (such as Fantastic Beasts and Where to Find Them), critical essays and analyses, and the 2016 debut of the original stage play Harry Potter and the Cursed Child. This collection of new essays interprets the Wizarding World beyond the books and films through the lens of convergence culture. Contributors explore how online communities tackle Sorting and games like the Quidditch Cup and the Triwizard Tournament, and analyze how Fantastic Beasts and Harry Potter and the Cursed Child are changing fandom and the canon alike.',
    image:
    "http://books.google.com/books/content?id=NVNLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://www.googleapis.com/books/v1/volumes/NVNLDwAAQBAJ",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
