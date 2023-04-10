import React from 'react';
import './App.css';
import Technolodgies from './technologies';
import Profile from './Profile';
function App() {
  return (
    <>
      <div className='bg position-fixed min-vw-100 min-vh-100 top-0 left-0'></div>
      <div className='container mt-5'>
        <div className="h-100 rounded-5 shadow-lg w-100 row justify-items-center block mb-5 bg-white d-flex fs-4">
          <Profile />
          <Technolodgies />
        </div>
      </div>
    </>
  );
}

export default App;
