import React from 'react'
import "./Loading.css"
export default function Loading(props) {
    const {height}=props
  return (
    <div style={{height:`${height}`}} className='loadingtheme'></div>
  )
}
