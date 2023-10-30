import React, { useState } from 'react'
import EventImage from "./../assests/images/event.jpg";
import emptySeat from "./../assests/images/emptySeat.svg";
import mySeat from "./../assests/images/mySeat.svg";

const seatsarr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0]
];

// cons [seats, setSeats] = useState(seats);


const EventDescription = () => {


  const [seats, setSeats] = useState(seatsarr);
 const  handleSeat=async(r,c)=>{
   const  updatedSeats=seats
    if(seats[r][c]===1)
    updatedSeats[r][c]=0
  else
  updatedSeats[r][c]=1
setSeats([...updatedSeats])

  }
  return (
    <div>
      <h1 className='event_heading'>Event Detail</h1>
      <div className='img_event'>
      <img  className = "image" src={EventImage}/>
      </div>
      
     
      <div className='seat_map'>
        {seats.map((seat, rowIndex) => (
          <div key={rowIndex} className="seat_row">
            {seat.map((seat, seatIndex) => (
              <div key={seatIndex} className="seat">
                Seat {String.fromCharCode(65 + rowIndex)}{seatIndex.toString().padStart(2, '0')} - 
                { <img onClick={()=>handleSeat(rowIndex,seatIndex)} src= {seat === 0 ? emptySeat : mySeat} alt="Empty Seat" /> }
              </div>
            ))}
          </div>
        ))}
      </div>


    </div>
  )
}

export default EventDescription;
