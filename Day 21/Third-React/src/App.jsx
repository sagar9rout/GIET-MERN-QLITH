import { useState } from 'react'

import './App.css'
import Register from './Register'
import Home from './component/Home'
import About from './component/About'
import { Route, Routes } from 'react-router'
import DashBoard from './component/Dashboard'
import Product from './component/product'
import Nav from './component/Nav'
import CheckUseEffect from './component/CheckUseEffect'
import Fetch from './component/Fetch'



function App() {
  let [a,setA]=useState(8)
  console.log("App Rendered") // it always refresh the component
  // to maintain the refresh state we use {useState hook}

  return (
    // <>
    //   {/* hello
    //   <br />
    //   a value: {a}
    //   <button onClick={() => setA(a + 1)}>Increment</button> */}
    //   <Register/>
    // </>
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}>
            <Route path='product/:userId' element={<Product/>}></Route>
        </Route>
      </Routes>
      <CheckUseEffect/>
      <Fetch/>
    </div>
  )
}

export default App
