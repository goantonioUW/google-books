const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema ({
    thumbnail:{type: Image},
    title: {type: String, required: true},
    authors: {type: String, required: true},
    description: {type: String, required: true},
    buyLink: {type: String, required: false},
    categories: {type: String, required: true},
    pageCount: {type: Number, required: true},
    canonicalVolumeLink: {type: String, required: true}
});

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;