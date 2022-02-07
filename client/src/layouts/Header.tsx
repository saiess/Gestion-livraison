import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
        <div>
            <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2"> </div>
            <div className="relative w-1/2 flex justify-end">
                <button type='button' className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-red-700 hover:border-gray-300 focus:border-gray-300 focus:outline-none"> </button>
                <div className="hidden absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <Link to="/" className="block px-4 py-2 account-link hover:text-white">Sign Out</Link>
                </div>
            </div>
        </header>
        </div>
  );
};

export default Header;