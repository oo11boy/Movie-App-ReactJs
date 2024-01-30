import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleGener() {
    const infogener=useParams()
  return (
    <div>{infogener.gener}</div>
  )
}
