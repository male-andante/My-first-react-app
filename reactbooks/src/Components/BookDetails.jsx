import React from 'react'
import { Card, Col, Row, Container, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import history from '../Data/books/history.json'


export default function BookDetails() {

    const params = useParams()
  const book = history.find((book) => book.asin === params.asin)
  
  if (!book) {
    return (
        <Container className="mt-5">
            <div className="text-center">
                <h2>Libro non trovato</h2>
                <p>Mi dispiace, il libro che stai cercando non è disponibile.</p>
            </div>
        </Container>
    )
}


    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <Card className="border-0 shadow-sm">
                        <Row className="g-0">
                            <Col md={4}>
                                <Card.Img 
                                    src={book.img} 
                                    alt={book.title}
                                    className="img-fluid rounded-start h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <Card.Title className="h3 mb-3">{book.title}</Card.Title>
                                            <Card.Subtitle className="mb-3 text-muted">
                                                Categoria: <Badge bg="info">{book.category}</Badge>
                                            </Card.Subtitle>
                                        </div>
                                        <h4 className="text-primary">€{book.price}</h4>
                                    </div>
                                    
                                    <Card.Text>
                                        <strong>ASIN:</strong> {book.asin}
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-primary text-white">
                            <h5 className="mb-0">Recensioni</h5>
                        </Card.Header>
                        <Card.Body>
                            <CommentArea asin={book.asin} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}