import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const params = useParams();
  const {id} = params
  console.log(id)
  return (
    <div>
        <h1>Details</h1>
    </div>
  )
}

export default Details