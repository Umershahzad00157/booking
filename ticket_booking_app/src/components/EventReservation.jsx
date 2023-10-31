import React from 'react';
import ReservationImage from "./../assests/images/reservation.jpg";
import seatImage from "./../assests/images/bookedSeat.svg";
import cross from "./../assests/images/cross.svg";


const EventReservation = () => {
  return (
    <div>
      <h1 className='event_heading'>Reservation</h1>
      <div className='img_event'>
      <img  className = "image" src={ReservationImage}/>
      </div>

      <div className='reserved_seat'>
      <hr/>
      <div className='event_reservation_detail'>
      <h2 className='res_seat'>Reserved Seats</h2>

      <div className='reservations_detail'>

      </div>
      <div className='seat_details'>
      <div>
      <img className='svg' src={seatImage}/>
      </div>
      <div>
      <p>The Famous PartyZoic</p>
      <p>Seat No: A4</p>
      <p>Price: $200</p>
      </div>
    <div>
    <img className='svg ' src = {cross} alt='image'/>
    </div>

      </div>
      </div>
      
      </div>


      </div>
  )
}

export default EventReservation
