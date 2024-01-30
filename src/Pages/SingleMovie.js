import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleMovie() {
    const dataparam=useParams()
    console.log(dataparam)
  return (
    <div>{dataparam.id}</div>
  )
}
