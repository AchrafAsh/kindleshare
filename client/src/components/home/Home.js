import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationBoard from './NotificationBoard';
import Feed from './Feed';

class Home extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
        if (!this.props.isAuthenticated) return <Redirect to="/sign-in"/>
        return (
            <Container>
                <Row>
                    <Col xs="8">
                        <Feed />
                    </Col>
                    <Col xs="4">
                        <NotificationBoard />
                    </Col>
                </Row>
                <br />
                <br />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);