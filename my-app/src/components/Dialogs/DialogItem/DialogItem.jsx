import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialog.module.css';



const DialogItem =(props ) => {
    let path = '/dialog/' + props.id
    return(
        <NavLink className={d.dialog} to={path} >{props.name} </NavLink>
        
    )
    
}


export default DialogItem;