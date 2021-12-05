import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    let dialogsElements = 
        props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
        );

    let messageElements = 
    props.messages.map ( m => <Message message={m.message} />
        );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
            <div>
            <textarea placeholder="New message" className={s.messageText} ref={newMessageElement}></textarea>
            </div>
            <button className={s.messageButton} onClick={ addMessage }>Send message</button>
        </div>
    );
}


export default Dialogs;