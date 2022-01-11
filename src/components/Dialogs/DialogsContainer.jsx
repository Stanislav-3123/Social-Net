import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/messages-reducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    // let state = props.store.getState();

    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator());
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.store.dispatch(updateNewMessageBodyCreator(body));
    // }
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (e) => {
                    let body = e.target.value;
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs
                    newMessageBody={state.messagesPage.newMessageBody}
                    dialogs={state.messagesPage.dialogs}
                    messages={state.messagesPage.messages}
                    onSendMessageClick={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange} />
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;