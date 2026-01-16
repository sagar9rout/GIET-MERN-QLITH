import React from 'react'
import { useNavigate } from 'react-router'

function About() {
  let navigate=useNavigate();

  function handleNavigate(){
    navigate('/dashboard')
  }
  return (
    <div>
      About
      <br />
      <button onClick={handleNavigate}>click here to go to dashboard</button>
    </div>
  )
}

export default About