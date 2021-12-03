import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
    
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Natalia" id="1" />
                <DialogItem name="Vlad" id="2" />
                <DialogItem name="Viktor" id="3" />
                <DialogItem name="Gleb" id="4" />
                <DialogItem name="Anfisa" id="5" />
                <DialogItem name="Irina" id="6" />
                <DialogItem name="Ruslan" id="7" />
            </div>  
            
            <div className={s.messages}>
               <Message message="Hello/" />
               <Message message="How are you?" />
               <Message message="Learn React?" />
               <Message message="And Redux?" />
               <Message message="Yo!" />
            </div>
        </div>
    );
}


export default Dialogs;