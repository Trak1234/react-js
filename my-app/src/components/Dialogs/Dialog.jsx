import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const DialogItem =(props ) => {
    let path = '/dialog/' + props.id
    return(
        <NavLink className={d.dialog} to={path} >{props.name} </NavLink>
        
    )
    
}


const MessageItem =(props) => { 
    
    return (
        <NavLink className={d.message} to={props.id} >{props.name}</NavLink>
    )
}





const Dialogs = (props) => {

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


    let dialogItems = dialog.map((d) => <DialogItem name={d.name} id={d.id} />);

    let messageItems = message.map((m) => <MessageItem name={m.name} id={m.id} />);
   /*  let dialogItem = [<DialogItem name={dialog[0].name} id={dialog[0].id}/>,
    <DialogItem name={dialog[1].name} id={dialog[1].id}/>]; */



    return (
    <div className={d.dialogs}>
       <div className={d.dialogsitems}>
            
            {dialogItems}
       </div>
       <div className={d.messages}>
            {messageItems}
       </div>
    </div>
    )
}

export default Dialogs;