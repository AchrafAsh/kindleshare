const express = require('express');
const router = express.Router();

const Highlight = require('../models/Highlight');

// @route   GET highlights
// @desc    Get all highlights
// @access  Public
router.get('/', (req, res) => {
    Highlight.find()
        // .sort({ bookId })
        .then(highlights => res.json(highlights))
});

// @route   POST highlights
// @desc    Add highlight
// @access  Public
router.post('/', (req, res) => {
    const newHighlight = Highlight({
        content: req.body.content,
        bookId: req.body.bookId
    });
    newHighlight.save()
        .then(highlight => res.json(highlight))
});

// @route   DELETE highlights/:id
// @desc    Delete a highlight
// @access  Public
router.delete('/:id', (req, res) => {
    Highlight.findById(req.params.id)
        .then(highlight => highlight.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;