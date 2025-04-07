import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'   
import history from '../Data/books/history.json'
import CommentArea from './CommentArea'

export default function AllTheBooks({ searchQuery }) {
    const [selectedBook, setSelectedBook] = useState(null)



    const filterBooks = () => {
        console.log(history)

        // Se l'input è vuoto, mostra tutti i libri
        if (!searchQuery) {
            return history
        }
        // Altrimenti filtra i libri in base al titolo
        return history.filter((book) => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
        )
    }

    return (
        <Container className='my-3'>   
            <Row>
                <Col md={9}>
                    <Row>
                        {filterBooks().map((book) => (
                            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <SingleBook
                                    data-testid="single-comment"
                                    title={book.title}
                                    img={book.img}
                                    price={book.price}
                                    category={book.category}
                                    asin={book.asin}
                                    selectedBook={selectedBook === book.asin}
                                    setSelectedBook={setSelectedBook}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md ={3}>
                {selectedBook && <CommentArea asin={selectedBook} />}
                </Col>
            </Row>
        </Container>
    )
}

