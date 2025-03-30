import React from 'react'


export default function SingleComment({comment, rate}) {
  return (
    <div>
        <p>{comment}</p>
        <span>{rate}</span>
    </div>
  )
}
