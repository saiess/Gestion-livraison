import React from 'react';
import { Outlet } from 'react-router-dom';

const User: React.FC = () => {
  return (
        <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Gestion Users</h1>
            <div className="w-full mt-12">
                <p className="text-xl pb-3 flex items-center justify-between">
                    <span>
                        <i className="fas fa-list mr-3" /> Users
                    </span>
                    <button
                        type="button"
                        className="w-44 bg-white cta-btn text-lg px-2 py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center show-modal"
                    >
                        <i className="fas fa-plus mr-3" /> New User{' '}
                    </button>
                </p>
                <div className="bg-white overflow-auto">
                   <Outlet/>
                </div>
            </div>
        </main>
  );
};

export default User;
