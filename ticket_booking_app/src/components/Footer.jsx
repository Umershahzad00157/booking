import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPersonMilitaryPointing} from '@fortawesome/free-solid-svg-icons';
import { faGithub , faTwitter} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div>
    <div className='footer_main'>
    
    <div className='footer'>
           
        <div className='footer_description'> 
        <p className='contact_us'>Contact Us</p>
        <span className='icon'> <FontAwesomeIcon  icon={faEnvelope} /> umer00157@gmail.com  </span> <br/>
        <span className='icon'> <FontAwesomeIcon  icon={faPhone} /> +92 302 6007610  </span> <br/>
        <span className='icon'> <FontAwesomeIcon  icon={faTwitter} />  https://twitter.com/Umershahzad0015  </span> 

        </div>  
    
        <div className='mail'>
        <p className='contact_us'>Customer Support</p>
        <span className='icon'> <FontAwesomeIcon  icon={faPersonMilitaryPointing} /> Support feature  </span> <br/>
        <span className='icon'> <FontAwesomeIcon  icon={faGithub} /> https://github.com/Umershahzad0015  </span> <br/>
        <span className='icon'> <FontAwesomeIcon  icon={faPhone} /> +92 302 6007610  </span> 



        </div>

    </div>
    

    
    <div className='footer_bottom'> <p  className='rights'><hr/>&copy; All rights are reserved</p> </div>
    
    </div>
    </div>
  )
}

export default Footer
