import React, {useParams} from 'react'

export default function BookDetails() {

    const param = useParams()
    console.log(param)
    
  return (
    <div>BookDetails</div>
  )
}
