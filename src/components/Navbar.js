import React from 'react'
import { Link, useLocation } from "react-router-dom";

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = "/login";
  }

const Navbar = (props) => {
    let location = useLocation();
    return (
        <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/" onClick={() => props.changeBackground('')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about" onClick={() => props.changeBackground('None')}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/notes"? "active": ""}`} to="/notes" onClick={() => props.changeBackground('None')}>Notes</Link>
                        </li>
                        
                       
                    </ul>
                    
                   {!localStorage.getItem('token')? <form className="d-flex"> 
                    {/* <Link className="btn btn-primary mx-1" to="/login" role="button" onClick={() => props.changeBackground('https://t4.ftcdn.net/jpg/08/57/33/39/360_F_857333945_GUMsMA2X86auO8knHib9NGsCfzWM65PS.jpg')}>Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link> */}
                    </form> :
                    <div className={`form-check form-switch text-${props.mode === "info"?"dark":"white"}`}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onClick={props.toogleMode}
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label className={`"form-check-label" text-${"primary"}htmlFor="flexSwitchCheckDefault"`} >
                      Enable {props.mode === "info"?"Dark":"Light"}Mode
                    </label>
                  </div>  }
                     <button className="btn btn-primary mx-3" onClick={handleLogout} >Logout</button>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
