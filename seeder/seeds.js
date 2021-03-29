let mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb+srv://Antonio-admin:passw0rd@cluster0.ahew4.mongodb.net/booksDB?retryWrites=true&w=majority")

let bookSeeds = [
    {
        thumbnail:{type: Image},
        title: {type: String, required: true},
        authors: {type: String, required: true},
        description: {type: String, required: true},
        buyLink: {type: String, required: false},
        categories: {type: String, required: true},
        pageCount: {type: Number, required: true},
        canonicalVolumeLink: {type: String, required: true}
    }
];
db.booksDB.deleteMany({})
  .then(() => db.booksDB.collection.insertMany(bookSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });