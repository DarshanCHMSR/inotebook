import React from 'react'
import './Newlog.css'
import { FaUser,FaLock  } from "react-icons/fa";

function Newlog() {
  return (
   
    <div className="newlog">
    <form>
      <h1>Log In</h1>
      <div className="username">
    <input type="text" placeholder="Username" required></input>
    <FaUser className="icons"/>
    </div>
    <div className="password">
      <input type="password" placeholder="Enter the password " required/>
      < FaLock className="icons" />

      </div>
      <div className="remember">
      <label><input type='checkbox' />Remember me</label>
      <a href="/">Forgot password?</a>
      </div>
      <button type='submit'>Login</button>
      <div className="regiter">
        <p>Don't remember password <a href="/">Register</a></p>
      </div>
    </form>
    </div>

  )
}

export default Newlog