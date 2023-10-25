import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
    <NavBar/>
    <br/><hr className='hr'/><br/>
    <h1 className='enent_heading'>EVENTS</h1>

    <div className='countries'>

    <div className='row_1'>
    <div className='events'><a><img></img></a></div>
    <div className='events'><a></a></div>
    <div className='events'><a></a></div>
    </div>

    <div className='row_2'>
    <div className='events'></div>
    <div className='events'></div>
    <div className='events'></div>
    </div>


    <div className='row_3'>
    <div className='events'></div>
    <div className='events'></div>
    <div className='events'></div>
    </div>




    </div>


      <Footer/>
    </div>
  )
}

export default Home
