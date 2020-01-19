import React, { useState } from 'react'
import {
    Container,
    Card,
    CardImg,
    TabPane,
    ListGroup,
    ListGroupItem,
    NavLink,
    TabContent,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import classnames from 'classnames';

function BookList(props) {
    const { books, deleteBook } = props;
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    
    const handleDelete = (e) => {
        const book = books[e.target.value]
        deleteBook(book._id);
    }

    return (
        <div>
            <Nav className="scrolling-wrapper" tabs>
                {books.map((book, index) => (
                    <NavItem className="book-card" key={index}>
                        <NavLink className={classnames({ active: activeTab === index })} onClick={() => {toggle(index);}}>
                            <Button onClick={handleDelete} value={index} className="book-delete-btn" color="danger">x</Button>
                            <Card>
                                <CardImg top src={book.cover} alt="book cover" />
                            </Card>
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
                {books.map((book, index) => (
                    <TabPane key={index} tabId={index}>
                        <Container>
                            <Button className="mb-3" target="_blank" href={book.amazon_link} color="warning">See it on amazon</Button>
                            <br />
                            {book.title} 
                            <br />
                            {book.author}
                            <br />
                            {book.highlights.length} Highlights
                        </Container>
                        <ListGroup>
                            {book.highlights.map((highlight, index) => (
                                <ListGroupItem key={index}>{ highlight }</ListGroupItem>
                            ))}
                        </ListGroup>
                    </TabPane>
                ))}
            </TabContent>
        </div>
    )
}

export default BookList;