import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

/*STRUTTURA COMMENTO
{
    "comment": string
    "rate": string
    "elementId": string - ASIN del libro
}*/

// password lezione W2D4: eWPtisa3

export default function AddComment({ asin }) {
    const [comment, setComment] = useState('')
    const [rate, setRate] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2U3Y2UzNDU2NzY1NTAwMTUyZGM2OTciLCJpYXQiOjE3NDMyNDQ4NTIsImV4cCI6MTc0NDQ1NDQ1Mn0.Buc-0R30-I1X8PKbDQhVPC0WMjShwGeQ4uR24aAGtI0"

    const postUrl = 'https://striveschool-api.herokuapp.com/api/comments/'

    const handleChangeComment = (e) => {
        console.log(e.target.value)
        setComment(e.target.value)
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Authorization': auth
                },
                body: JSON.stringify({
                    comment,
                    rate,
                    elementId: asin
                })
            })
            
            if (response.ok) {
                setComment('')
                setRate(1)
                setError(null)
                // Qui potresti aggiungere una callback per ricaricare i commenti
            } else {
                const data = await response.json()
                setError(data.message || 'Errore durante l\'invio del commento')
            }
        } catch (error) {
            setError('Errore durante l\'invio del commento: ' + error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Label column sm={2}>
                    Recensione
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        value={comment}
                        onChange={handleChangeComment}
                        placeholder="Scrivi la tua recensione" 
                        required
                    />
                </Col>
            </Row>

            <Row className="mb-3">
                <Form.Label column sm={2}>
                    Valutazione
                </Form.Label>
                <Col sm={10}>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <Form.Check
                            key={num}
                            type="radio"
                            label={'⭐'.repeat(num)}
                            name="rating"
                            id={`rating-${num}`}
                            checked={rate === num}
                            onChange={() => setRate(num)}
                        />
                    ))}
                </Col>
            </Row>

            {error && (
                <Row className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <div className="text-danger">{error}</div>
                    </Col>
                </Row>
            )}

            <Row className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button 
                        type="submit" 
                        disabled={isLoading || !comment.trim()}
                    >
                        {isLoading ? 'Invio in corso...' : 'Invia la Recensione'}
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
