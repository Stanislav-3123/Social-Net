import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
        props.onNewMessageChange(e);
    }
    let messageElements =
        props.messages.map(m => <Message message={m.message} />
        );
    let dialogsElements =
        props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
        );
    let newMessageBody = props.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'
                    className={s.messageText}
                    value={newMessageBody}
                ></textarea>
            </div>
            <div>
                <button
                    onClick={onSendMessageClick}
                    className={s.messageButton}>Send message</button>
            </div>
        </div>
    );
}




export default Dialogs;