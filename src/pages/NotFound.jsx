import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
         <h1>404</h1>
         <h2>Not Found</h2>
         <Link to="/">Qua về trang home</Link>
    </>
  )
}

export default NotFound
