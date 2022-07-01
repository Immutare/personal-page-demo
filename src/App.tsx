import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className='bg-black min-h-screen min-w-full relative'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
