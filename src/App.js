import React from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'
import MovieRoutes from './MovieRoutes'
import { SearchModalContextProvider } from './ContextApi/SearchModalContext/SearchModalContext'
import { GenersContextProvider } from './ContextApi/GenersContext/GenersContext'

export default function App() {
  let RouteMovie = useRoutes(MovieRoutes)

  return (
    <SearchModalContextProvider>
      <GenersContextProvider>
      <>
      
      <div className='container'>
     
        {RouteMovie}
        
        </div>
        </>
        </GenersContextProvider>
    </SearchModalContextProvider>
  )
}
