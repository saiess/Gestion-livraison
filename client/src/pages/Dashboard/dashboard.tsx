import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

// ** Layouts imports
import Sidebar from '../../layouts/Sidebar';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

// ** Layouts imports
import useFetch from '../../hooks/useFetch';

interface DashboardProps {
    
}

const Dashboard: React.FC<DashboardProps> = () => {

  const { data, loading, error } = useFetch('http://localhost:3001/user/getAll');
  return (
    <div className='bg-gray-300 flex'>
    {/** sidebare */}
    <Sidebar />
    <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* // Desktop Header */}
        <Header />
    
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">

                {/* <!-- Content goes here! 😁 --> */}
                <Outlet />
    
            {/* footer */}
            <Footer />
        </div>
        
    </div>
</div>
  );
};

export default Dashboard;
