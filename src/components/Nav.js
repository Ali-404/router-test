import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Nav() {

  const location = useLocation()
  
  return (
    <nav className='navbar navbar-expand text-bg-primary p-2 shadow w-100  top-0 '>
      <h1 className='navbar-brand text-light'>Routing Exemple </h1>
      <span>{location.pathname}</span>
    </nav>
  )
}
