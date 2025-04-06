import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import ListComments from './ListComments'
import AddComment from './AddComment'

export default function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const baseUrl = 'https://striveschool-api.herokuapp.com/api/books'

    const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2U3Y2UzNDU2NzY1NTAwMTUyZGM2OTciLCJpYXQiOjE3NDMyNDQ4NTIsImV4cCI6MTc0NDQ1NDQ1Mn0.Buc-0R30-I1X8PKbDQhVPC0WMjShwGeQ4uR24aAGtI0"

    useEffect(() => {
        const getComments = async () => {
            try {
                setIsLoading(true)
                let response = await fetch(`${baseUrl}/${asin}/comments/`, {
                    headers: {
                        'Authorization': auth,
                        'Content-Type': 'application/json'
                    }
                })
                
                if (response.ok) {
                    let data = await response.json()
                    console.log('Commenti ricevuti:', data)
                    setComments(data)
                    setError(null)
                } else {
                    const data = await response.json()
                    console.error('Errore dalla API:', data)
                    setError('Errore nel caricamento dei commenti')
                }
            } catch (error) {
                console.error('Errore nella fetch:', error)
                setError('Errore nel caricamento dei commenti: ' + error.message)
            } finally {
                setIsLoading(false)
            }
        }

        if (asin) {
            getComments()
        } else {
            setIsLoading(false)
        }
    }, [asin])

    if (isLoading) {
        return <Spinner animation="border" role="status" />
    }

    if (error) {
        return <div className="text-danger">{error}</div>
    }

    return (
        <Container>
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            <ListComments comment={comments} />
            <AddComment asin={asin} />
        </Container>
    )
}