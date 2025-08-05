import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, isLoggedIn } = useAuth();
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
    { label: 'Health Articles', path: '/articles' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-blue-600" />
          <Link to="/" className="text-2xl font-bold text-gray-900">
            HealTrust
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition font-medium ${isActive(item.path)
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Link
                to='/profile'
                className={`transition flex gap-2 font-medium ${isActive('/profile')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                <FaUserCircle className=" text-2xl" />
                <span className="text-gray-700 font-medium">{user?.name || 'User'}</span>
              </Link>
              <Link
                to='/logout'
                className={`transition flex items-center gap-2 font-medium ${isActive('/logout')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                <FaSignOutAlt className="" />
                <span className='text-gray-700 font-medium'>Logout</span>
              </Link>

            </div>
          ) : (
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
