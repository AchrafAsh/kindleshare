import React, { Component, Fragment } from 'react'
import { NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import { signout } from '../../actions/authActions'
import PropTypes from 'prop-types'

class Signout extends Component {
    static propTypes = {
        signout: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.signout} href='/'>Sign Out</NavLink>
            </Fragment>
        )
    }
}



export default connect(null, { signout })(Signout);