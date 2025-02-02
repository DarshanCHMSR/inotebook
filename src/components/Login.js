import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

// this is the page to login
const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://backend-green-five-18.vercel.app/api/auth/login", {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        // json.success=false;
        console.log(json);
        // json.success=true;
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            props.showAlert('Logged in Successfully', 'success')
            navigate("/");
        props.changeBackground('https://img.freepik.com/premium-photo/aesthetic-desktop-wallpaper-8k-photography-background_882954-2450.jpg')
            // console.log(json.authtoken)
        }
        else{
            props.showAlert('Invalid Credentials', 'danger')
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='login'>
            
            <form  onSubmit={handleSubmit}>
            <p className='text'>Login to continue to iNotebook</p>
                <div className="mb-3 " >
                    <input type="email" className="email" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder='Enter your Email' />
                    <div id="emailHelp" className="texts">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                   
                    <input type="password" className="password" value={credentials.password} onChange={onChange} name="password" id="password" placeholder='Password'/>
                </div>
    <div className="remembers">
      <label>
        <input type='checkbox' className='rem'/>Remember me
    </label>
      <a href="/signup">Forgot password?</a>
      </div>
        <div className='line'>
      <button type='submit' className='submit' >Login</button>
      </div>
      <div className="regiter">
        <p className='p'>Don't remember password ?<a href="/signup" >Register</a></p>
      </div>
                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
        </div>
    )
}

export default Login
