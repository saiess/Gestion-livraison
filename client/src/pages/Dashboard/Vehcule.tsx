import React from 'react';

interface VehiculeProps {
    
}

const Vehicule: React.FC<VehiculeProps> = () => {
  return (
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Vehicules</h1>

                <div className="w-full mt-6">
                    <p className="text-xl pb-3 flex items-center justify-between">
                        <span><i className="fas fa-list mr-3" /> table</span>
                        <button type='button' className="w-44 bg-white cta-btn text-lg px-2 py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3" /> New Vehicule</button>
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white text-center">
                                <tr>
                                    <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Type</th>
                                    <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">matricule</th>
                                    <th className= "py-3 px-4 uppercase font-semibold text-sm">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-center">
                                <tr>
                                    <td className="w-1/4 py-3 px-4">X5</td>
                                    <td className="w-1/4 py-3 px-4">BMW</td>
                                    <td className="w-1/4 py-3 px-4">1234</td>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                        <button type='button' className="text-xl text-red-800"><i className="fas fa-trash" /> </button>
                                        <button type='button' className="text-xl text-green-800 pl-6"><i className="fas fa-edit" /> </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
  );
};

export default Vehicule;