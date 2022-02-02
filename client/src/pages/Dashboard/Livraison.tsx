import React from 'react';

interface LivraisonProps {
    
}

const Livraison: React.FC<LivraisonProps> = () => {
  return (
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Promotions</h1>

                <div className="w-full mt-12">
                    <p className="text-xl pb-3 flex items-center justify-between">
                        <span><i className="fas fa-list mr-3" /> table</span>
                        <button type='button' className="w-44 bg-white cta-btn text-lg px-2 py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center show-modal">
                            <i className="fas fa-plus mr-3" /> New Promotion
                        </button>
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="text-left w-full border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Number</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">City from</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">City To</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Weight</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">distance</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Price</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Zone</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">status</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">action</th>
                                </tr>
                            </thead>
                            <tbody id="promotions">

                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">20</td>
                                    <td className="py-4 px-6 border-b border-grey-light">Casablanca</td>
                                    <td className="py-4 px-6 border-b border-grey-light">Agadir</td>
                                    <td className="py-4 px-6 border-b border-grey-light">180Kg</td>
                                    <td className="py-4 px-6 border-b border-grey-light">600km</td>
                                    <td className="py-4 px-6 border-b border-grey-light">100£</td>
                                    <td className="py-4 px-6 border-b border-grey-light">National</td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                                            <span className="relative">Active</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button type='button' className="text-xl text-green-800 pl-2"><i className="fas fa-edit" /> </button>
                                        <button type='button' className="text-xl text-red-800 pl-6"><i className="fas fa-trash" /> </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
          </main>
  );
};

export default Livraison;