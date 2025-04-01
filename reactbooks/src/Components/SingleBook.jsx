import React from 'react'
import { Card, Button } from 'react-bootstrap'
import CommentArea from './CommentArea'

export default function SingleBook({ title, img, price, category, asin, selected, onSelect }) {
    return (
        <>
            <Card
                className="h-100"
                style={{ border: selected ? '3px solid red' : 'none' }}
                onClick={() => onSelect(asin)}
            >
                <Card.Img variant="top" src={img} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                    <Card.Text>ASIN: {asin}</Card.Text>
                    <Card.Text>€{price}</Card.Text>
                    <Button
                        variant={selected ? "danger" : "primary"}
                        className="mt-auto mb-2"
                    >
                        {selected ? 'Deseleziona' : 'Leggilo'}
                    </Button>
                </Card.Body>
            </Card>
            {selected && <CommentArea asin={asin} />}
        </>
    )
}
