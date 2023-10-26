import React from 'react';
import Footer from './Footer';
import EventCard from './EventCard';

const Home = () => {
  return (
    <div>
  
    <br/><hr className='hr'/><br/>
    <h1 className='enent_heading'>SELECT THE COUNTRIES</h1>



    <div className='countrty_cards'>
    <EventCard country_name = "USA"/>
    <EventCard country_name = "Canada"/>
    <EventCard country_name = "Australia"/>
    <EventCard country_name = "Saudi Arabia"/>
    </div>

    <div className='countrty_cards'>
    <EventCard country_name = "United Kingdom"/>
    <EventCard country_name = "Morocco"/>
    <EventCard country_name = "Spain"/>
    <EventCard country_name = "Austria"/>
    </div>

   


      <Footer/>
    </div>
  )
}

export default Home
