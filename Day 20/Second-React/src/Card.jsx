import React from 'react'

function Card(props) {
  return (
    <div className='p-5 bg-blue-200 m-2 shadow-lg rounded-lg hover:scale-105 transition'>
        <img src={props.obj.img} alt="hii" width={200} />
        <h3>{props.obj.Title}</h3>
        <p>{props.obj.desc}</p>
    </div>
  )
}

export default Card