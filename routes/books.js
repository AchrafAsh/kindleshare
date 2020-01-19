const express = require('express');
const router = express.Router();
// const fetchBooks = require('./fetchBooks');
const Book = require('../models/Book');
const auth = require('../middleware/auth');

// @route   GET books
// @desc    Get all books
// @access  private
router.get('/', auth, (req, res) => {
    Book.find({ user_id: req.user.id })
        .sort({ last_access: -1 })
        .then(books => res.json(books))
        .catch(err => res.status(400).json(err));
});

// @route   POST books
// @desc    Add books
// @access  Private
router.post('/', auth, (req, res) => {
    const newBook = Book({
        book_id: req.body.book_id,
        user_id: req.user.id,
        title: req.body.title,
        author: req.body.author,
        cover: req.body.cover,
        last_sync: new Date,
        last_access: new Date(req.body.last_access),
        amazon_link: req.body.amazon_link,
        highlights: req.body.highlights
    });
    newBook.save()
        .then(book => res.json(book))
});

// @route   DELETE books/:id
// @desc    Delete a book
// @access  Private
router.delete('/:id', auth, (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   GET books
// @desc    Fetch books from kindle
// @access  Private
router.get('/kindle', (req, res) => {
    // fetchBooks(req, res);
});

module.exports = router;