import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    
}

const Sidebar: React.FC<SidebarProps> = (props) => {

  return (
            <aside className="relative bg-red-900 h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <Link to ='Dashboard' className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</Link>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <Link to="statistic" className="flex items-centertext-white py-4 pl-6">
                        <i className="fas fa-sticky-note mr-3"/> 
                        Dashboard
                    </Link>
                    <Link to="user" className="flex items-center text-white py-4 pl-6">
                        <i className="fas fa-user mr-3"> </i>
                        Users
                    </Link>
                    <Link to="vehicule" className="flex items-center text-white py-4 pl-6">
                        <i className="fas fa-truck-pickup mr-3"> </i>
                        Vehicules
                    </Link>
                    <Link to="livraison" className="flex items-center text-white py-4 pl-6">
                        <i className="fas fa-dolly mr-3"> </i> 
                        Livraison
                    </Link>
                    <Link to="prime" className="flex items-center text-white py-4 pl-6">
                        <i className="fas fa-comments-dollar mr-3"> </i> 
                        Primes
                    </Link>
                </nav>
            </aside>
  );
};

export default Sidebar;