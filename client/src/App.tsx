import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// * pages import * 
import Login from './pages/Login/LoginUsers';

import LoginAdmin from './pages/Login/LoginAdmin';

import Dashboard from './pages/Dashboard/Dashboard';

import Error from './pages/Error';

import Statistic from './pages/Dashboard/Statistic';

import Livraison from './pages/Dashboard/Livraison';

import User from './pages/Dashboard/User';

import Vehicule from './pages/Dashboard/Vehcule';

import Prime from './pages/Dashboard/Prime';

import Manager from './pages/Dashboard/Manager';

import Responsable from './pages/Dashboard/Responsable';

import Driver from './pages/Dashboard/Driver';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Login/>} />
          <Route path='admin' element={<LoginAdmin/>} />

          {/* we want to protect */}
          <Route path='dashboard' element={<Dashboard/>}>
            <Route path='statistic' element={<Statistic/>}/>
            <Route path='livraison' element={<Livraison/>}/>
            <Route path='user' element={<User/>}>
              <Route path='manager' element={<Manager/>}/>
              <Route path='responsable' element={<Responsable/>}/>
              <Route path='driver' element={<Driver/>}/>
            </Route>
            <Route path='vehicule' element={<Vehicule/>}/>
            <Route path='prime' element={<Prime/>}/>
          </Route>


        </Route>

        {/* catch missing paths */}
        <Route path='*' element={<Error />} />
        
      </Routes>
    </Router>

  );
}

export default App;
