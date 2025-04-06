import React from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

export default function ListComments(comment) {
  return (
    <ListGroup variant="flush" className="mt-2">
            {comment.length > 0 ? (
                comment.map((comment) => (
                    <SingleComment comment= {comment} key={comment._id}/>
                ))
            ) : (
                <ListGroup.Item>Nessun commento disponibile</ListGroup.Item>
            )}
        </ListGroup>
  )
}



