import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

function NotificationBoard() {
    return (
        <Container>
            <ListGroup flush>
                <ListGroupItem disabled tag="a" href="#">Othmane followed you</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">Othmane responded to your post</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">Bill Gates has added a book to his library</ListGroupItem>
            </ListGroup>
        </Container>
    )
}


export default NotificationBoard;