import React from 'react'

function Navbar() {
  return (
    <nav className="bg-[#0E0E0F] mt-4 py-4">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        <a href="#" className="text-white text-md flex items-center">
          ✦ Gems <span className="text-gray-400 ml-1 text-xs">BETA</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
