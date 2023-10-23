import React from 'react'

const Inputs = (props) => {
  return (
    <div>
      <input className='input' type={props.type}   placeholder={props.title}/>
    </div>
  )
}

export default Inputs;
