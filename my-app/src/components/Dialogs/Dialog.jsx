import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialog.module.css';



const DialogItem =(props ) => {
    let path = '/dialog/' + props.id
    return(
        <NavLink className={d.dialog} to={path} >{props.name} </NavLink>
        
    )
    
}


const MessageItem =(props) => { 
    
    return (
        <NavLink className={d.message} to={props.id} >{props.message}</NavLink>
    )
}




const Dialog = () => {

    let dialog = [
        {id:1,name:'Dimych'},
        {id:2,name:'Victor'},
        {id:3,name:'Oleg'},
        {id:4,name:'Vlad'},
        {id:5,name:'Sveta'},
        {id:6,name:'Dimych'},
    ]

    let message = [
        {id:1,name:'Hi'},
        {id:2,name:'Hi how are you?'},
        {id:3,name:'Hello'},
        {id:4,name:'Hello'},
        {id:5,name:'Hello'},
        {id:6,name:'Hello'},
    ]

  

    return (
    <div className={d.dialogs}>
       <div className={d.dialogsitems}>
       
        <DialogItem id={1}/>          
       </div>
       <div className={d.messages}>
            <Messages/>
       </div>
    </div>
    )
}

export default Dialog;