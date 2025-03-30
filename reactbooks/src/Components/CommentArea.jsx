import React, { useEffect, useState } from 'react'
import { Container, Spinner} from 'react-bootstrap'
import ListComments from './ListComments'
import AddComment from './AddComment'

export default function CommentArea({ asin }) {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    //const getUrl = "https://striveschool-api.herokuapp.com/api/books" //asin/comments/

    useEffect(() => {
        getComments()
    }, [asin])

    const getComments = async () => {
        

        try {
            setIsLoading(true)
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/:${asin}/comments`)
            if (response.ok) {
                const data = await response.json()
                setComments(data)
                setError(null)
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
            <AddComment />
        </Container>
    )
}