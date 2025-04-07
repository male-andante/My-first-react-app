import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function SingleBook({ title, img, price, category, asin, selectedBook, setSelectedBook }) {

    const navigate = useNavigate()

    return (
        <>
            <Card
                className="h-100"
                style={{ border: selectedBook ? '3px solid red' : 'none' }}
                onClick={() => setSelectedBook(asin)}
                data-testid="book-card"
                
            >
                <Card.Img variant="top" src={img} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                    <Card.Text>ASIN: {asin}</Card.Text>
                    <Card.Text>€{price}</Card.Text>

                    <Button variant='dark' className="w-100 mt-auto mb-2" onClick={() => navigate(`/details/${asin}`)}>Scoprilo</Button>


                </Card.Body>
            </Card>
        </>
    )
}
