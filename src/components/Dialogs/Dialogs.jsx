import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
// import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {
	let onSendMessageClick = () => {
		props.onSendMessageClick();
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.onNewMessageChange(body);
	}
	let messageElements =
		props.messagesPage.messages.map(m => <Message message={m.message} />
		);
	let dialogsElements =
		props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
		);
	let newMessageBody = props.messagesPage.newMessageBody;
	// if (!props.isAuth) return <Navigate to="/login" />

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
					className={s.messageButton}>Send mеssage</button>
			</div>
		</div>
	);
}




export default Dialogs;