import React from 'react';



const CreateEvent = () => {
  return (
    <div className='create_event_input'>
    <div className='section_create'>
    <h1 className='create_event_heading'>Create Event</h1>
    <div className='create_event'>

    <div>
    <div className='dflex'>
    <div>
    <label>Event Name</label>
    <input className='input  create_event_input' placeholder='Enter Your Event Name' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div>
    <label>Email</label>
    <input className='input  create_event_input' placeholder='Enter Your Email' /><br/>
    </div>
    </div>

    <div className='set_width'>
    <center>
    <label>Location</label>
    <input className='input  create_event_input location_input' placeholder='Enter Location' /><br/>
    </center>
    </div>


    <div className='dflex'>
    <div>
    <label>Row :</label>
    <input className='input  create_event_input' value="A" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div>
    <label>Enter Seat Number</label>
    <input className='input  create_event_input' placeholder='Enter Your Seat Number in row A' />
    </div>
    </div>
    

    <div className='dflex'>
    <div>
    <label>Row :</label>
    <input className='input  create_event_input' value="B" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div>
    <label>Enter Seat Number</label>
    <input className='input  create_event_input' placeholder='Enter Your Seat Number in row B' />
    </div>
    </div>


    </div>
    
    <center>
    <button className='btn'>Book Seats</button>
    </center>
    
    
    </div>
    </div>
    </div>
  )
}

export default CreateEvent;
