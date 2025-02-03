import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-light py-3 footer" >
            <p className="text-center">iNotebook &copy; {new Date().getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Footer 