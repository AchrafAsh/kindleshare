import React, { Component, Fragment } from 'react'
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap'
import Signout from '../auth/Signout'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AppNavbar extends Component {
    state = {
            isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <Fragment>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/library">Library</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/explore">Explore</NavLink>
                </NavItem>
                <NavItem>
                    <Signout />
                </NavItem>
                <NavItem>
                    <Button href="/profile" color="warning" className="ml-4">{ user ? user.name[0] : '' }</Button>
                </NavItem>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <NavLink href="/sign-up">Sign Up</NavLink>
                </NavItem>                
                <NavItem>
                    <NavLink href="/sign-in">Sign In</NavLink>
                </NavItem>
            </Fragment>
        )
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">KindleShare</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);