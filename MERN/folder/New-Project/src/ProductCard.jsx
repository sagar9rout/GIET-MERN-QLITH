import React from 'react'

function ProductCard(props) {
  return (
    <div className='p-5 bg-green-200 m-2 shadow-lg rounded-lg hover:scale-105 transition'>
        <img src={props.prod.img} alt="" width={100} className='w-full h-58 object-cover'/>
        <h2 className='text-lg font-bold mb-2'>{props.prod.Name}</h2>
        <p className='font-semibold text-gray-700'>Price: {props.prod.Price}</p>
        <p className='text-sm text-gray-600 mt-1'>Description: {props.prod.Description}</p>
    </div>
  )
}

export default ProductCard