import React from 'react'
import { Link } from 'react-router'


function Nav() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/product">Product</Link>
    </div>
  )
}

export default Nav