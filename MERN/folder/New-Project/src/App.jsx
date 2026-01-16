// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard'

let products=[
  {
    Name:'Nike Shoes',
    Price:2999,
    Description:'Comfortable running Shoes',
    img:'https://images.unsplash.com/photo-1611510338559-2f463335092c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5pa2UlMjBzaG9lfGVufDB8fDB8fHww'
  },
  {
    Name:'Smart Watch',
    Price:1578,
    Description:'Feature-rich smart watch with fitness tracking',
    img:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-3_03_a9750bcd-1a56-4a50-a0f4-d7a72a13a958.jpg?v=1639988259'
  },
  {
    Name:'One-Punch Man manga',
    Price:899,
    Description:'Manga about a hero who can defeat any opponent with a single punch',
    img:'https://m.media-amazon.com/images/I/611wjJQiB3L._AC_UF1000,1000_QL80_.jpg'
  }
]

function App() {

  return (
    <>
      <div className='max-w-7xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto '>
          {
            products.map((prod) => (
              <ProductCard prod={prod} />
            ))
          }
      </div>
    </>
  )
}

export default App
