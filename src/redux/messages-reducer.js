const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Natalia' },
        { id: 2, name: 'Vlad' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Gleb' },
        { id: 5, name: 'Anfisa' },
        { id: 6, name: 'Irina' },
        { id: 7, name: 'Ruslan' }
    ],
    messages: [
        { id: 1, message: "Hello." },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Learn React?" },
        { id: 4, message: "And Redux?" },
        { id: 5, message: "Yo!" }
    ],
    newMessageBody: "Hello"
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            } 
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default messagesReducer;

    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;

    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = ''
    //     state.messages.push({ id: 6, message: body });

    // }

    // return state;