import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SingleBook({ title, img, price, category }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={img} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>€{price}</Card.Text>
                <Button variant="primary" className="mt-auto">Leggilo</Button>
            </Card.Body>
        </Card>
    )
}
