import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function SingleBook({ title, img, price, category, asin, selectedBook, setSelecredBook }) {

const navigate = useNavigate()

    return (
        <>
            <Card
                className="h-100"
                style={{ border: selectedBook ? '3px solid red' : 'none' }}
                onClick={() => setSelecredBook(asin)}
            >
                <Card.Img variant="top" src={img} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                    <Card.Text>ASIN: {asin}</Card.Text>
                    <Card.Text>€{price}</Card.Text>
                    <div className='d-flex'>
                        <Button
                            variant={selectedBook ? "danger" : "primary"}
                            className=" w-100 mt-auto mb-2"
                        >
                            {selectedBook ? 'Chiudi' : 'Leggi i commenti'}
                        </Button>
                        <Button variant='dark' className= "w-100 mt-auto mb-2" onClick={() => navigate(`/details/${asin}`)}>Scoprilo</Button>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}
