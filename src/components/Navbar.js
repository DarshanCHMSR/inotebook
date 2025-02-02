import React from 'react'
import { Link, useLocation } from "react-router-dom";

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = "/login";
  }

const Navbar = (props) => {
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/" onClick={() => props.changeBackground('None')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about" onClick={() => props.changeBackground('None')}>About</Link>
                        </li>
                       
                    </ul>
                   {!localStorage.getItem('token')? <form className="d-flex"> 
                    {/* <Link className="btn btn-primary mx-1" to="/login" role="button" onClick={() => props.changeBackground('https://t4.ftcdn.net/jpg/08/57/33/39/360_F_857333945_GUMsMA2X86auO8knHib9NGsCfzWM65PS.jpg')}>Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link> */}
                    </form> : <button className="btn btn-primary" onClick={handleLogout} >Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
