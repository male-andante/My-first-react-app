import React from 'react'
import SingleComment from './SingleComment'

export default function ListComments(comments) {
  return (
    <ListGroup variant="flush" className="mt-2">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <SingleComment comment= {comment} key={comment._id}>
                        <strong>Voto: {comment.rate}/5</strong>
                        <p className="mb-0">{comment.comment}</p>
                    </SingleComment>
                ))
            ) : (
                <ListGroup.Item>Nessun commento disponibile</ListGroup.Item>
            )}
        </ListGroup>
  )
}



