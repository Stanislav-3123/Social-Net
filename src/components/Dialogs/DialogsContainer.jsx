import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/messages-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
		isAuth: state.auth.isAuth
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		onNewMessageChange: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
			// dispatch(sendMessageCreator());
		},
		onSendMessageClick: () => {
			dispatch(sendMessageCreator());
		}
	}
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// const DialogsContainer = (props) => {
//     // let state = props.store.getState();

//     // let onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageCreator());
//     // }
//     // let onNewMessageChange = (e) => {
//     //     let body = e.target.value;
//     //     props.store.dispatch(updateNewMessageBodyCreator(body));
//     // }
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
//                 let onNewMessageChange = (e) => {
//                     let body = e.target.value;
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
//                 return <Dialogs
//                     newMessageBody={state.messagesPage.newMessageBody}
//                     dialogs={state.messagesPage.dialogs}
//                     messages={state.messagesPage.messages}
//                     onSendMessageClick={onSendMessageClick}
//                     onNewMessageChange={onNewMessageChange} />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }