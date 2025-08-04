import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Logcontext } from '../App';

const Navbar = () => {
    const [signedIn, setsignedIn] = useContext(Logcontext)
  return (
    <nav className=" bg-black text-white p-4 font-sans  fixed w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-between items-center space-y-2 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            Platform
          </Link>
          
          <div className="text-xs opacity-80 tracking-wider">
            online visibility, simplified
          </div>
        </div>

        {/* Center Section */}
       

        {/* Right Section */}
        <div className="text-sm font-mono opacity-90 ">
          <div>
            <Link to="/" className=" pr-4 font-bold tracking-tighter">
            Platform
          </Link>
          <Link to="/signup" className="pr-4 font-bold tracking-tighter">
            Sign-Up
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Sub-component for navigation items


export default Navbar;