import React, {useParams, useState} from 'react'
import { Container } from 'react-bootstrap'
import history from '../data/books/history.json'

export default function BookDetails() {

    const [myBooks, setMyBooks] = useState(history)
    const param = useParams()
    console.log(param, myBooks, setMyBooks)

  return (
    <Container>
        <h1>Book Details Page</h1>
    </Container>
  )
}
