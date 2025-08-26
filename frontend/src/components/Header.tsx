import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cycling-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Pedal Point</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-cycling-600 bg-cycling-50'
                  : 'text-gray-600 hover:text-cycling-600 hover:bg-gray-50'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/rides"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/rides')
                  ? 'text-cycling-600 bg-cycling-50'
                  : 'text-gray-600 hover:text-cycling-600 hover:bg-gray-50'
              }`}
            >
              <MapIcon className="w-5 h-5" />
              <span>Rides</span>
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/profile')
                  ? 'text-cycling-600 bg-cycling-50'
                  : 'text-gray-600 hover:text-cycling-600 hover:bg-gray-50'
              }`}
            >
              <UserIcon className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 