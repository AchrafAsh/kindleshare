import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Spinner, Button, Container, Media, NavLink, NavItem, TabContent, TabPane, Nav, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import BookShelve from './BookShelve';
import Activity from './Activity';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/bookActions';
import { getPostsByUserId } from '../../actions/postActions';
import PropTypes from 'prop-types'

class Profile extends Component {
    state = {
        activeTab: '1',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        auth: PropTypes.object.isRequired,
        book: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        getBooks: PropTypes.func.isRequired,
        getPostsByUserId: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getBooks();
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }

    render() {
        const toggle = this.toggle;
        const activeTab = this.state.activeTab;
        const { books } = this.props.book;
        const { posts } = this.props.post;
        if (this.props.auth.user == null){
            return <Container><Spinner color="warning" /></Container>;
        } else {
            if (this.props.isAuthenticated === false) return <Redirect to="/sign-in"/>
        return (
            <Container>
                <Media className="profile-description">
                    <Media left>
                        <Media className="profile-image" object src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" alt="Profile image" />
                    </Media>
                    <Media body>
                        <Media heading>
                            Bill Gates
                        </Media>
                        <p>
                            I'm a book lover. I regularly schedule off weeks that I dedicate to reading and catching up on my "To Read List".
                            <br />Follow me and you'll get exclusive access to my library
                        </p>
                        <Button className="follow-btn" size="lg" color="warning">Follow</Button>
                    </Media>
                </Media>
                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Library
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { 
                                toggle('2');
                                this.props.getPostsByUserId(this.props.auth.user._id)
                            }}
                        >
                            Posts
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <BookShelve books={books} />
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Activity posts={posts} />
                            </Col>
                        </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        )}
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    book: state.book,
    post: state.post,
})

export default connect(mapStateToProps, { getBooks, getPostsByUserId })(Profile);