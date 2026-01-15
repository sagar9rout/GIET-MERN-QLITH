import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
  return (
    <div>
        ChildA
        <br />
        Number: {props.num}
        <br />
        String: {props.str}
        <br />
        IsPassed: {"" + props.ispassed}
        {/* another way */}
        <br />
        IsPassed: {props.isPassed.toString()}
        {/* Direct boolean type does not work in jsx show in UI  */}
        <br />
        Array: {props.arr.join(", ")}
        <br />
        Array Elements using map
        {
        props.arr.map((v,i) => (
            <div>{v}</div>
        ))
        }
        <ChildB num={props.num} />
    </div>
  )
}

export default ChildA