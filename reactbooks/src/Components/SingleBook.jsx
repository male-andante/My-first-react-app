import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SingleBook({ title, img, price, category }) {
    const [selectedBook, setSelectedBook] = useState(false)

    const selectBook = () => {
        setSelectedBook(!selectedBook) // Toggle dello stato
    }

    return ( 
        <Card 
            className="h-100" 
            style={{ border: selectedBook ? '3px solid red' : 'none' }}
        >
            <Card.Img variant="top" src={img} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>€{price}</Card.Text>
                <Button 
                    variant={selectedBook ? "danger" : "primary"} 
                    className="mt-auto" 
                    onClick={selectBook}
                >
                    {selectedBook ? 'Deseleziona' : 'Leggilo'}
                </Button>
            </Card.Body>
        </Card>
    )
}
