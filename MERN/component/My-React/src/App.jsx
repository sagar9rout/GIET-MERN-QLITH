import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Service from './Service'
import ContactUs from './ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home/>
        <About/>
        <Nav/>
        <Service/>
        <ContactUs/>          
      </div>
    </>
  )
}

export default App
