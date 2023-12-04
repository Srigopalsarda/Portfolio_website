import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    
    setIsOpen(!isOpen);
  };
  const navbarstyle={
    // fontFamily:"'Roboto', sans-serif",
    fontFamily:"Remeole",
    fontSize:"1.2rem",
    padding:"10px",
    borderRadius:"30px",
  }

  return (
    <nav className="fixed bg-transparent justify-center flex flex-col md:flex-row w-screen backdrop-filter backdrop-blur-lg bg-opacity-10 mt-12 md:mt-0 border-b border-gray-200 " >
        {/* <img src={logo} alt="logo" className="w-44 mt-2 ml-4 h-12 " /> */}
      <div className="container mx-auto flex justify-end md:justify-center items-center">
        {/* <div className="text-black text-xl font-semibold">Logo</div> */}
       
        <div className="hidden md:flex space-between  " style={navbarstyle}>
          <Link to="/" className={`text-${props.color} cb mr-16 font-semibold text-center p-1 hover:text-gray-400 hover:scale-110`}>Home</Link>
          <Link to="/about" className={`text-${props.color} mr-16 font-semibold text-center p-1 hover:text-gray-400 hover:scale-110`}>About</Link>
          <Link to="/Projects" className={`text-${props.color} mr-16 font-semibold text-center p-1 hover:text-gray-400 hover:scale-110`} >Projects</Link>
          <Link to="/contact" className={`text-${props.color} mr-0 font-semibold text-center p-1 hover:text-gray-400 hover:scale-110`}>Contact</Link>
        </div>
        <div className="md:hidden flex backdrop-filter backdrop-blur-lg bg-opacity-10 justify-center mb-4 items-center fixed">
          <button className={`text-${props.color} mb-8 text-start focus:outline-none`} style={{transitionDuration: 3}}  onClick={toggleNavbar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="visible  md:hidden flex  flex-col justify-center items-center bg-white-800   ">
          <Link to="/" className={`block text-${props.color} font-semibold text-center py-2 px-4 hover:bg-gray-700`}>Home</Link>
          <Link to="/about" className={`block text-${props.color} text-center font-semibold py-2 px-4 hover:bg-gray-700`}>About</Link>
          <Link to="/Projects" className={`block text-${props.color} text-center font-semibold py-2 px-4 hover:bg-gray-700`}>Projects</Link>
          <Link to="/contact" className={`block text-${props.color} text-center font-semibold py-2 px-4 hover:bg-gray-700`}>Contact</Link>
        </div>
      )}
    </nav>
    );
};

export default Navbar;
