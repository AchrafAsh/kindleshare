import React, { Component } from "react";
import {
  Container,
  Input,
  Spinner
} from "reactstrap";

class Explore extends Component {
    state = {
        loading: false
    }

    setLoading = e => {
        e.preventDefault();
        this.setState({ loading: !this.state.loading });
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.setLoading}>
                    <Input placeholder="Search ..." />
                </form>
                <br />
                { this.state.loading ? 
                    <Container><Spinner color="warning" /></Container> : null 
                }
            </Container>
    );
  }
}

export default Explore;
