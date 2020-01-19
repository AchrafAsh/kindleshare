const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

const app = express();

app.use(express.json());

// Connect to Mongo
const mongoURI = config.get('mongoURI');
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
// mongoose.connection.once('once', () => console.log('MongoDB connection established successfully'));

// User routes
// const highlights = require('./routes/highlights');
const books = require('./routes/books');
const users = require('./routes/users');
const auth = require('./routes/auth');
const posts = require('./routes/posts');

// app.use('/highlights', highlights);
app.use('/books', books);
app.use('/users', users);
app.use('/auth', auth);
app.use('/posts', posts);

// Serve static assets if in production
if(process.env.NODE_ENV == 'prooduction') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFilde(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));