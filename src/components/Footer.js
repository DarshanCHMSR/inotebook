import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-light py-3 " style={{position: "relative", top: "13.9vh", width: "100%"}}>
            <p className="text-center">iNotebook &copy; {new Date().getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Footer 