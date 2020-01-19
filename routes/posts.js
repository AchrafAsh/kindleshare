const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');

// @route   GET posts
// @desc    Get all posts | later only following posts
// @access  Private
router.get('/', (req, res) => {
    if (req.query.userId){
        Post.find({ user_id: req.query.userId })
            .sort({ posted_at: -1 })
            .then(posts => res.json(posts))
            .catch(err => res.status(400).json(err))
    } else {
        Post.find()
            .sort({ posted_at: -1 })
            .then(posts => res.json(posts))
            .catch(err => res.status(400).json(err));
    }
});

// @route   POST post
// @desc    Add post
// @access  Private
router.post('/', auth, (req, res) => {
    const newPost = Post({
        user_id: req.user.id,
        username: req.body.username,
        book_id: req.body.book_id,
        highlight_author: req.body.highlight_author,
        highlight: req.body.highlight,
        comment: req.body.comment
    });
    newPost.save()
        .then(post => res.json(post))
});

// @route   DELETE posts/:id
// @desc    Delete a post
// @access  Private
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;