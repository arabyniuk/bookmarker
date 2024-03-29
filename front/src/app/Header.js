import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logoutUser }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const renderDropdown = () => {
    if (!currentUser.email) {
      return (
        <>
          <Link
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            to="login"
          >
            Sign in
          </Link>
          <Link
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            to="registration"
          >
            Sign up
          </Link>
        </>
      );
    }

    return (
      <>
        <div className="relative">
          <button className="block h-10 w-10 rounded-full overflow-hidden focus:outline-none" onClick={toggleDropdown}>
            <img
              className="h-full w-full object-cover"
              src={`https://eu.ui-avatars.com/api/?name=${currentUser.name}&size=1000`}
              alt="avatar"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
              <Link to='profile' className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'>Settings</Link>
              <div className="py-2">
                <hr />
              </div>
              <Link
                className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'
                to='/'
                onClick={logoutUser}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <header>
      <nav className="container flex justify-between px-4 py-8 mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://img.icons8.com/cute-clipart/64/undefined/b.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {renderDropdown()}
        </div>
      </nav>
    </header>
  );
};

export default Header;
