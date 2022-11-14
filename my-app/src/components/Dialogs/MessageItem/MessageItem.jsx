import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialog.module.css';






const MessageItem =(props) => { 
    
    return (
        <NavLink className={d.message} to={props.id} >{props.name}</NavLink>
    )
}




export default MessageItem;