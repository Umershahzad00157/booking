import axios from "axios";


const login = async ( email, password) => {
      try  {
    

            const response = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:3001/user/login',
                data: {
                  email:email,
                  password:password
                }
              });

            return(response.status);
        }

    
    catch (error) {
    console.log(error)

    }
  
   
}

export default login;
