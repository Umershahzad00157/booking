import axios from "axios";


const Signup =async (name, email, password) => {
      try  {
        // const response =await axios.post("http://127.0.0.1:3001/user/signup",
        //     {
        //     name: name,
        //     email : email,
        //     password : password
        //     })

            const response = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:3001/user/signup',
                data: {
                    name:name,
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

export default Signup;
