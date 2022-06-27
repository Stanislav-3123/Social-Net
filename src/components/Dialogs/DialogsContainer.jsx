// import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/messages-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthNavigateComponent } from '../../hoc/WithAuthNavigate';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
		// isAuth: state.auth.isAuth
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
// let AuthNavigateComponent = WithAuthNavigateComponent(Dialogs);
// (props) => {
// 	if (!props.isAuth) return <Navigate to="/login" />
// 	return <Dialogs {...props} />
// }
// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);
export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthNavigateComponent)(Dialogs);
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