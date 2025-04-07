import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'




export default function SingleComment({comment, rate}) {

  const baseUrl = 'https://striveschool-api.herokuapp.com/api/comments'

    const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2U3Y2UzNDU2NzY1NTAwMTUyZGM2OTciLCJpYXQiOjE3NDMyNDQ4NTIsImV4cCI6MTc0NDQ1NDQ1Mn0.Buc-0R30-I1X8PKbDQhVPC0WMjShwGeQ4uR24aAGtI0"

  const deleteComment = async (asin) => {
    try {
      let response = await fetch(`${baseUrl}/${asin}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: auth,
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
      } else {
        throw new Error('Non è stato possibile eliminare la recensione. Riprova!')
      }
    } catch (error) {
      alert(error)
    }
  }

    return (
    <ListGroup.Item>
      <span>{comment}</span>
      <span className='float-end'>{rate}</span>
    <Button
      variant='danger' className='ms-2 float-end' data-testid="single-comment" onClick={() => deleteComment(comment._id)}>
      Cancella recensione
    </Button>
  </ListGroup.Item>
  )
}
