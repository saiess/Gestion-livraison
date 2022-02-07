import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [showUser, setShowUser] = useState<boolean>(false);
  return (
        <aside className="relative bg-red-900 h-screen w-64 hidden sm:block shadow-xl">
            <div className="p-6">
                <Link to="Dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
                    Admin
                </Link>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <Link to="statistic" className="flex items-center text-white py-4 pl-6 hover:shadow-lg hover:bg-red-800">
                    <i className="fas fa-sticky-note mr-3" />
                    Dashboard
                </Link>
                <button
                    type="button"
                    onClick={() => {
                      return setShowUser(!showUser);
                    }}
                    className="flex flex-col text-white py-4 pl-6 w-full hover:shadow-lg hover:bg-red-800"
                >
                    <span>
                        <i className="fas fa-user mr-3"> </i>
                        Users
                    </span>
                    {showUser ? (
                        <div className="w-full pt-4">
                            <Link to="user/manager" className="flex items-center text-white py-4 pl-6 hover:underline hover:bg-red-900 rounded-l-2xl">
                                <i className="fas fa-user-cog mr-3"> </i>
                                Manager
                            </Link>
                            <Link to="user/responsable" className="flex items-center text-white py-4 pl-6 hover:underline hover:bg-red-900 rounded-l-2xl">
                                <i className="fas fa-user-shield mr-3" />
                                Responsable
                            </Link>
                            <Link to="user/driver" className="flex items-center text-white py-4 pl-6 hover:underline hover:bg-red-900 rounded-l-2xl">
                                <i className="fas fa-user-tag mr-3" />
                                Driver
                            </Link>
                        </div>
                    ) : null}
                </button>
                <Link to="vehicule" className="flex items-center text-white py-4 pl-6 hover:shadow-lg hover:bg-red-800">
                    <i className="fas fa-truck-pickup mr-3"> </i>
                    Vehicules
                </Link>
                <Link to="livraison" className="flex items-center text-white py-4 pl-6 hover:shadow-lg hover:bg-red-800">
                    <i className="fas fa-dolly mr-3"> </i>
                    Livraison
                </Link>
                <Link to="prime" className="flex items-center text-white py-4 pl-6 hover:shadow-lg hover:bg-red-800">
                    <i className="fas fa-comments-dollar mr-3"> </i>
                    Primes
                </Link>
            </nav>
        </aside>
  );
};

export default Sidebar;
