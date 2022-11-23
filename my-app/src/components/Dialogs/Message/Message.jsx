import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => { 
    return <textarea className={s.dialog}>{props.message}</textarea>
}

export default Message;