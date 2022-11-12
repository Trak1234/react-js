import React from 'react';
import Head from './Header.module.css';

const  Header = () => {
   return ( 
   
      <header className={Head.header}>
      <img className={Head.img} src='https://i.pinimg.com/originals/1b/8c/4a/1b8c4a21c217008ca89478652c7dc9f6.jpg' />
    </header>
   
   )
}

export default Header;