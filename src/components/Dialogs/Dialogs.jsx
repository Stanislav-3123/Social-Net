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
    let MessagesData = [
        {id: 1, message: "Hello." },
        {id: 2, message: "How are you?" },
        {id: 3, message: "Learn React?" },
        {id: 4, message: "And Redux?" },
        {id: 5, message: "Yo!" },
    ]
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name="Viktor" id="3" />
                <DialogItem name="Gleb" id="4" />
                <DialogItem name="Anfisa" id="5" />
                <DialogItem name="Irina" id="6" />
                <DialogItem name="Ruslan" id="7" />
            </div>

            <div className={s.messages}>
                <Message message={MessagesData[0].message} />
                <Message message={MessagesData[1].message} />
                <Message message={MessagesData[2].message} />
                <Message message={MessagesData[3].message} />
                <Message message={MessagesData[4].message} />
            </div>
        </div>
    );
}


export default Dialogs;