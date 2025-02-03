import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = (props) => {
        const [credentials, setCredentials] = useState({email: "", password: "" ,name:"" ,cpassword:""}) 
let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();  
        const {name,email,password} = credentials;
        const response = await fetch("https://backend-green-five-18.vercel.app/api/auth/creareuser", {
          
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email, password})
        });
        const json = await response.json()
        console.log(json);
     
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
         
            props.showAlert('Account Created Successfully', 'success')
        }
        else{
          props.showAlert('Invalid Credentials', 'danger')
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


  return (
    <div className="signup">
      <p className="text">Signup to continue to iNotebook</p>
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        
        <input
          type="text"
           className="names"
          id="name" name="name"
          placeholder="Enter your Name"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">        
        <input
          type="email"
          className="names"
          id="email" name="email"
          placeholder="Enter your Email"  onChange={onChange}
        />
      </div>
      <div className="mb-3">
        
        <input
          type="password"
          className="names"
          id="password" name="password"
          placeholder="Enter password"  onChange={onChange}

        />
      </div>
      <div className="mb-3">
        
        <input
          type="password"
           className="names"
          id="cpassword" name="cpassword"
          placeholder="Confirm Password"  onChange={onChange}
        />
      </div>
      <button className="submit" type="submit">
        Sign Up
      </button>
      <div className="regiter">
        <p className='p'>Already Hava a Account? <a href="/login">Login</a></p>
      </div>
      </form>
    </div>
  );
};

export default Signup;
