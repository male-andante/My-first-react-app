import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import history from '../data/books/history.json'

export default function AllTheBooks({ searchQuery, selectedBook, setSelectedBook }) {

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
        <Container className='my-3'>   {/* Questo è l'input di ricerca che devo spostare in NAV e per cui devo elevare lo stato i App e passarlo in allthebook come prop*/}
            <Row className='my-3'>
                <Col>
                    <Form.Control 
                        type="text" 
                        placeholder="Filtra per titolo" 
                        value={searchQuery}
                        onChange={(e) => filterBooks(e.target.value)} 
                    />
                </Col>
            </Row>
            <Row>
                {filterBooks().map((book) => (
                    <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <SingleBook
                            {...book}
                            selected={selectedBook === book.asin}
                            onSelect={(asin) => setSelectedBook(selectedBook === asin ? null : asin)}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

