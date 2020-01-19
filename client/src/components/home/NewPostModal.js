import React, { Component } from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';

class NewPostModal extends Component {
    state = {
        modal: false,
        bookDropdownOpen: false,
        highlightDropdownOpen: false,
        bookToShare: null,
        highlightToShare: "",
        comment: ""
    }

    openPostModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    toggleBookDropDown = () => {
        this.setState({ bookDropdownOpen: !this.state.bookDropdownOpen })
    }
    toggleHighlightDropDown = () => {
        this.setState({ highlightDropdownOpen: !this.state.highlightDropdownOpen });
    }

    handleCommentChange = e => {
        this.setState({ comment: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        // send the post to database!
        const newPost = {
            username: this.props.user.name,
            book_id: this.state.bookToShare.book_id,
            highlight_author: this.state.bookToShare.author,
            highlight: this.state.highlightToShare,
            comment: this.state.comment
        }
        this.props.addPost(newPost);

        this.setState({
            bookToShare: null,
            highlightToShare: "",
            comment: "",
            modal: false
        })
        console.log(newPost);
    }

    render(){
        const books = this.props.books;
        const { bookToShare, highlightToShare } = this.state;
        return (
        <div>
            <Button color="warning" onClick={this.openPostModal}>Share insight</Button>
            <Modal isOpen={this.state.modal} toggle={this.openPostModal}>
                {/* <ModalHeader toggle={this.openPostModal}>Title</ModalHeader> */}
                <ModalBody>   
                        <blockquote>
                            { bookToShare ? 
                                <div>
                                    <p className="highlight">{highlightToShare}</p>
                                    <footer>- {bookToShare.author}</footer>
                                </div>
                                : null }
                        </blockquote>
                    <Input onChange={this.handleCommentChange} value={this.state.comment} placeholder="Share your thoughts..." />
                </ModalBody>
                <ModalFooter>
                    <InputGroup>
                        <InputGroupButtonDropdown addonType="append" isOpen={this.state.bookDropdownOpen} toggle={this.toggleBookDropDown}>
                            <DropdownToggle caret>
                                Choose a Book
                            </DropdownToggle>
                            <DropdownMenu className="drop-down-menu">
                                { books.map(book => (
                                        <DropdownItem onClick={() => this.setState({ bookToShare: book })} key={book.book_id}>{book.title}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </InputGroupButtonDropdown>
                        <Input readOnly value={bookToShare ? bookToShare.title : ""} />
                    </InputGroup>

                    <InputGroup>
                        <InputGroupButtonDropdown addonType="append" isOpen={this.state.highlightDropdownOpen} toggle={this.toggleHighlightDropDown}>
                            <DropdownToggle caret>
                                Choose a Highlight
                            </DropdownToggle>
                            <DropdownMenu className="drop-down-menu" >
                                {
                                    bookToShare ? bookToShare.highlights.map((highlight, index) => (
                                        <DropdownItem key={index} onClick={() => this.setState({ highlightToShare: highlight })} >
                                            {highlight}
                                        </DropdownItem>
                                    )) 
                                    : <DropdownItem disabled>Choose a book first</DropdownItem>
                                }
                            </DropdownMenu>
                        </InputGroupButtonDropdown>
                        <Button className="ml-3" onClick={this.handleSubmit} color="secondary">Share</Button>
                    </InputGroup>
                </ModalFooter>
            </Modal>

            
        </div>
        )}
  }

export default NewPostModal;