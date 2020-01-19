const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    book_id: {
        type: String,
        required: true
    },
    highlight_author: {
        type: String,
        required: true
    },
    highlight: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    posted_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema);