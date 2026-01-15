import React from 'react'
import ChildA from './ChildA'

function ChildB(props) {
  return (
    <div>ChildB
        <br />
        Number value from ChildA: {props.num}
    </div>
  )
}

export default ChildB