const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    book_id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    last_sync: {
        type: Date,
        default: Date.now
    },
    last_access: {
        type: Date,
        required: true
    },
    amazon_link: {
        type: String,
        required: true
    },
    highlights: {
        type: Array,
        require: true
    }
})

module.exports = Book = mongoose.model('book', BookSchema);