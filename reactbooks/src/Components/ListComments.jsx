import React from 'react'
import SingleComment from './SingleComment'

export default function ListComments() {
  return (
    <SingleComment/>
  )
}


{/* <ListGroup variant="flush" className="mt-2">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <ListGroup.Item key={comment._id}>
                        <strong>Voto: {comment.rate}/5</strong>
                        <p className="mb-0">{comment.comment}</p>
                    </ListGroup.Item>
                ))
            ) : (
                <ListGroup.Item>Nessun commento disponibile</ListGroup.Item>
            )}
        </ListGroup> */}
