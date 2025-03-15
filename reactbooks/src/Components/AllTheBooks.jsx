import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import history from '../data/books/history.json'



export default function AllTheBooks() {
    return (
    
            <Container>
                <Row>
                {history.map(({ title, img, price, category }, index) => (
                    <Col key={index} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Subtitle className="text-muted">{category}</Card.Subtitle>
                                <Card.Text>€{price}</Card.Text>
                                <Button variant="primary">Leggilo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }

