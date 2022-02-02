import React from 'react';

function Login() {
  return <div className='bg-gray-300 h-screen'>
                <div className="flex justify-center items-center">
                <form
                    className="flex flex-col justify-center items-center rounded-lg space-y-10 w-1/4 h-full bg-white shadow-2xl border-2 border-fuchsia-800 mb-40 mt-60 py-10"
                    id="form">
                    <h1 className="text-5xl hover:underline text-gray-600 font-medium">Login</h1>
                    
                    <div className="w-4/5">
                        <label htmlFor="Email" className="text-gray-600 font-medium">Email</label>
                        <input type="email" placeholder="exemple@email.com"
                               className="w-full h-10 border-2 border-fuchsia-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-fuchsia-800 pl-3 rounded shadow-md"
                               id="email"/>
                        <small className="text-fuchsia-500"> </small>
                    </div>

                    <div className="w-4/5">
                        <label htmlFor="Email" className="text-gray-600 font-medium">Mot de passe</label>
                        <input type="password" placeholder="Entrer le mot de passe"
                               className="w-full h-10 border-2 border-fuchsia-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-fuchsia-800 pl-3 rounded shadow-md"
                               id="password"/>
                        <small className="text-fuchsia-500"> </small>
                    </div>

                    <input type="submit" value="Send"
                           className="w-1/4 h-10 rounded-md bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-xl shadow-lg shadow-fuchsia-800/50 cursor-pointer"/>
                </form>

            </div>
  </div>;
}

export default Login;