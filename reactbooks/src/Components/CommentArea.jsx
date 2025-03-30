import React, { useEffect, useState } from 'react'
import { Container, Spinner} from 'react-bootstrap'
import ListComments from './ListComments'
import AddComment from './AddComment'

const baseUrl = 'https://striveschool-api.herokuapp.com/api/books'

export default function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [asin, setAsin] = useState('')

    useEffect(() => {
        getComments()
    }, [asin])

    const getComments = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${baseUrl}/${asin}/comments/`
            )
            if (response.ok) {
                const data = await response.json()
                setComments(data)
                setError(null)
                setAsin(asin)
            } else {
                setError('Errore nel caricamento dei commenti')
            }
        } catch (error) {
            setError('Errore nel caricamento dei commenti: ' + error.message)
        } finally {
            setIsLoading(false)
        }
    }

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
            <ListComments comments={comments} />
            <AddComment asin={asin} />
        </Container>
    )
}