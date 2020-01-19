const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Highlight Schema
const HighlightSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    }
});

module.exports = Highlight = mongoose.model('highlight', HighlightSchema);