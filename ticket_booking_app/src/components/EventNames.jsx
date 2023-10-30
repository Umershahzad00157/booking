import React from 'react'
import Button from './Button'
// import img_card from "./../assests/images/flag.jpg"

const EventNames = (props) => {
  return (
    <div>
    <center>
    <div>
    <div className='event_card_details'>
    <div className='event_card_image' >
    </div>
    <div className='event_card_name'>
    <p>{props.title}</p>
    <p> Price : {props.price}</p>
    <button  className='btn see_details' >See Details</button>
    

    </div>
    
    </div>
    </div>
    </center>
      
    </div>
  )
}

export default EventNames
