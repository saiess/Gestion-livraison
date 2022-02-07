/* eslint-disable no-underscore-dangle */
import React from 'react';
import useFetch from '../../hooks/useFetch';


const Driver: React.FC = () => {

  const url = 'http://localhost:3001/user/getAll';
  const { data, loading, error } = useFetch(url);
      
  console.log(data, 'is heeeeeeeeere');
  if (loading) return <h1>LOADING...</h1>;
      
  if (error) console.log(error);
  return (
        <table className="min-w-full leading-normal">
        <thead>
            <tr>
                <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">First Name</th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Name</th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Vehicule</th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
        </thead>
        <tbody id="chefrayons">
            {data?.map((el) => {
              return (
                    <tr key={el._id}  >
                        <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{el?.firstname}</p>
                        </td>
                        <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{el?.lastname}</p>
                        </td>
                        <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{el?.email}</p>
                        </td>
                        <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{el?.vehicule}</p>
                        </td>
                        <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{el?.createdAt}</p>
                        </td>
                        <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                            <button type="button" className="text-xl pl-3 text-red-800">
                                <i className="fas fa-trash" />{' '}
                            </button>
                        </td>
                    </tr>
              );
            })}
        </tbody>
    </table>
  );
};

export default Driver;