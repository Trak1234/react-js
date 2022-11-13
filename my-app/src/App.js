import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialogs/Dialog';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    
    <div className='app-wrapper'>
      <Header />
      
      <Navbar />
        
      
      <div className='app-wrapper-content'>
        

        <Routes>
          
        <Route path='/profile/*' element={<Profile/>}/>
          <Route path='/dialog' element={<Dialog/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/music' element={<Music/>}/>
        </Routes>
       
        
      </div>


    </div>

  );
}





export default App;
