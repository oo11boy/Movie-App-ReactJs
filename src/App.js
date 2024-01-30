import React from 'react'
import { useRoutes } from 'react-router-dom'

import Header from './Component/Header/Header'
import './App.css'
import MovieRoutes from './MovieRoutes'
export default function App() {
  let RouteMovie=useRoutes(MovieRoutes)
  return (
    <div className='container'>
      {/* <Header/> */}
      {RouteMovie}</div>
  )
}
