import React, { Component } from 'react'
import { Container } from 'reactstrap'
import NewPostModal from './NewPostModal'
import PostDetails from './PostDetails';
import { connect } from 'react-redux'
import { getBooks } from '../../actions/bookActions'
import { getPosts, addPost } from '../../actions/postActions'
import PropTypes from 'prop-types'

class Feed extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        books: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        getBooks: PropTypes.func.isRequired,
        getPosts: PropTypes.func.isRequired,
        addPost: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBooks();
        this.props.getPosts();
    }

    render() {
        const { books } = this.props.books;
        const { posts } = this.props.posts;
        return (
            <Container className="feed">
                <NewPostModal books={books} addPost={this.props.addPost} user={this.props.auth.user} />
                <br />
                <div className="toast-block">
                    { posts.map(post => (
                        <PostDetails key={post._id} post={post} />
                    ))}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    books: state.book,
    posts: state.post,
    auth: state.auth
})

export default connect(mapStateToProps, { getBooks, getPosts, addPost })(Feed);