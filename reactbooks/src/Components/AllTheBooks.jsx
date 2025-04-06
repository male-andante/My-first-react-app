import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'   
import history from '../data/books/history.json'
import CommentArea from './CommentArea'

export default function AllTheBooks({ searchQuery }) {

    const [selectedBook, setSelectedBook] = useState(false)


    const filterBooks = () => {
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
                <Col md={8}>
                {filterBooks().map((book) => (
                    <Col key={book.asin} xs={12} md={4} className="mb-4">
                        <SingleBook
                            book={book}
                            selectedBook={selectedBook}
                            setSelectedBook={setSelectedBook}
                        />
                    </Col>
                ))}
                </Col>
                <Col md ={4}>
                <CommentArea asin={selectedBook} />
                </Col>
            </Row>
        </Container>
    )
}

