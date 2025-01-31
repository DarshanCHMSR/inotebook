import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
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
    <div className="container">
      <h2>Signup to continue to iNotebook</h2>
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name" name="name"
          placeholder="Enter your Name"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">        
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email" name="email"
          placeholder="name@example.com"  onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Enter password
        </label>
        <input
          type="password"
          className="form-control"
          id="password" name="password"
          placeholder="Enter password"  onChange={onChange}

        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="cpassword" name="cpassword"
          placeholder="Confirm Password"  onChange={onChange}
        />
      </div>
      <button class="btn btn-primary" type="submit">
        Button
      </button>
      </form>
    </div>
  );
};

export default Signup;
