import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Doctor from './Doctor';
import Patient from './Patient'
import Home from './Home';
import Navigation from './Navigation';
import './App.css';

function App(){
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/patient" element={<Patient/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


