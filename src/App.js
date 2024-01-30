import React from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'
import MovieRoutes from './MovieRoutes'
import { LoadingContextProvider } from './ContextApi/LoadingPage/LoadingPageContext'

export default function App() {
  let RouteMovie = useRoutes(MovieRoutes)

  return (
    <LoadingContextProvider>
      <>
      
      <div className='container'>
     
        {RouteMovie}
        
        </div>
        </>
    </LoadingContextProvider>
  )
}
