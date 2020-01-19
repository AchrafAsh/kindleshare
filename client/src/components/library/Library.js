import React, { Component } from 'react'
import { Container, Button } from 'reactstrap';
import BookList from './BookList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getBooks, fetchBooks, deleteBook } from '../../actions/bookActions';
import PropTypes from 'prop-types';

class Library extends Component {
    static propTypes = {
        getBooks: PropTypes.func.isRequired,
        deleteBook: PropTypes.func.isRequired,
        fetchBooks: PropTypes.func.isRequired,
        books: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getBooks();
    }

    onClick = () => {
        this.props.fetchBooks();
    }

    render() {
        if (!this.props.token) return <Redirect to="/login"/>
        const { books } = this.props.books;
        return (
            <Container>
                <Button color="warning" onClick={this.onClick}>Get my highlights</Button>
                <br />
                <br />
                {books.length > 0 ? <BookList deleteBook={this.props.deleteBook} books={ books }/> : null}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    books: state.book,
    token: state.auth.token,

})

export default connect(mapStateToProps, { getBooks, fetchBooks, deleteBook })(Library);