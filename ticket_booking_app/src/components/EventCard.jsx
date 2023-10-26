import React from 'react'

const EventCard = (props) => {
  return (
    <div>
      
    <div classNameName='card_main'>
    
    <div className="card-client">
    <div className="user-picture">
        
    </div>
    <p className="name-client"> {props.country_name}
        <span>Collection of events
        </span>
    </p>
    <div className="social-media">
        <a href="#">
            
            
            <button className='card_btn'>See</button>
        </a>
        
    </div>
</div>




    </div>

    </div>
  )
}

export default EventCard;
