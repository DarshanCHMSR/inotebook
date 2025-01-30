import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-light py-3">
            <p className="text-center">iNotebook &copy; {new Date().getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Footer 