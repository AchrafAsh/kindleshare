import React from 'react'
import { ListGroup, ListGroupItem, Media } from 'reactstrap'

function BookShelve({ books }) {
    return (
        <ListGroup>
            { books.map(book => (
                <ListGroupItem key={book._id} >
                     <Media>
                        <Media left target="_blank" href={book.amazon_link}>
                            <Media className="mr-3" object src={book.cover} alt="book cover" />
                        </Media>
                        <Media body>
                            <Media heading>
                                {book.title}
                            </Media>
                            <p>{book.author}</p>
                        </Media>
                    </Media>
                </ListGroupItem>
            )) }
        </ListGroup>
    )
}

export default BookShelve;