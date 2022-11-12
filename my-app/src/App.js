import React from 'react';
import './App.css';
import Dialog from './components/Dialogs/Dialog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
     {/*  <Profile /> */}
      
      <div className='app-wrapper-content'>
      <Profile />
      </div>


    </div>

  );
}





export default App;
