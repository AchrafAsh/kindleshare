import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'

class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        signup: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'SIGNUP_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.clearErrors();
        e.preventDefault();
        const { name, email, password } = this.state;
        const newUser = {
            name,
            email,
            password
        };
        this.props.signup(newUser);
    }

    render() {
        if (this.props.isAuthenticated) return <Redirect to="/"/>
        return (
            <Container>
                {  this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input onChange={this.handleChange} type="name" name="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Email</Label>
                        <Input onChange={this.handleChange} type="email" name="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Pasword</Label>
                        <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})


export default connect(mapStateToProps, { signup, clearErrors })(Signup);