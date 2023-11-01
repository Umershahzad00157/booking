import React from 'react'
import EventNames from './EventNames';
import EventReservation from './EventReservation';


const event = [
    {
    name : "Dreamscape Events" ,
    price : "$ 362",
    },
    {
        name : "Spectacular Soirees" ,
        price : "$ 150",
        },
        {
            name : "Enchanted Affairs" ,
            price : "$ 200",
            }
]

const Reservation = () => {
  return (
    <div>
      <div className='enevt_details'>
      <div className='event_name_main'>
      <div className='event_name'> 
      
      {event.map((event) =>(
        <EventNames
        title = {event.name}
        price = {event.price}
        />
      ))}
       
      </div>
      
      
      </div>
      <div className='event_description'>
      <EventReservation/>
      </div>
      </div>

    </div>
  )
}

export default Reservation;
