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

    let DialogsData = [
        { id: 1, name: 'Natalia' },
        { id: 2, name: 'Vlad' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Gleb' },
        { id: 5, name: 'Anfisa' },
        { id: 6, name: 'Irina' },
        { id: 7, name: 'Ruskan' },
    ]
    let dialogsElements = DialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />
        );

    let MessagesData = [
        { id: 1, message: "Hello." },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Learn React?" },
        { id: 4, message: "And Redux?" },
        { id: 5, message: "Yo!" },
    ]
    let messageElements = MessagesData
    .map ( message => <Message message={message.message} />
        );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    );
}


export default Dialogs;