// import profileReducer from './profile-reducer'
// import messagesReducer from './messages-reducer'
// import sidebarReducer from './sidebar-reducer'


// // const ADD_POST = 'ADD-POST'
// // const SEND_MESSAGE = 'SEND-MESSAGE'
// // const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// // const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
// let store = {
//     _state: {
//         messagesPage: {
//             dialogs: [
//                 { id: 1, name: 'Natalia' },
//                 { id: 2, name: 'Vlad' },
//                 { id: 3, name: 'Viktor' },
//                 { id: 4, name: 'Gleb' },
//                 { id: 5, name: 'Anfisa' },
//                 { id: 6, name: 'Irina' },
//                 { id: 7, name: 'Ruslan' }
//             ],
//             messages: [
//                 { id: 1, message: "Hello." },
//                 { id: 2, message: "How are you?" },
//                 { id: 3, message: "Learn React?" },
//                 { id: 4, message: "And Redux?" },
//                 { id: 5, message: "Yo!" }
//             ],
//             newMessageBody: ""
//         },
//         profilePage: {
//             posts: [
//                 { id: 1, post: "It`s my first post", likecounts: 11 },
//                 { id: 2, post: "Hello, how are you?", likecounts: 23 }
//             ],
//             newPostText: 'It-kamasutra.com'
//         },
//         sideBar: {
//             friendsOnline: [
//                 { id: 1, name: 'Natalia' },
//                 { id: 2, name: 'Vlad' },
//                 { id: 3, name: 'Viktor' },
//                 { id: 4, name: 'Gleb' },
//                 { id: 5, name: 'Anfisa' },
//                 { id: 6, name: 'Irina' }
//             ]
//         },
//     },
//     _callSubscriber() {
//         console.log('State is changed!');
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;  // observer
//     },
//     getState() {
//         return this._state
//     },
//     // addMessage() {
//     //     let newMessage = {
//     //         id: 6,
//     //         message: this._state.messagesPage.newMessageText,
//     //     };
//     //     this._state.messagesPage.messages.push(newMessage);
//     //     this._state.messagesPage.newMessageText = '';
//     //     this._callSubscriber(this._state);
//     // },
//     // updateNewMessageText(newMessageText) {
//     //     this._state.messagesPage.newMessageText = newMessageText;
//     //     this._callSubscriber(this._state);
//     // },
//     // addPost() {
//     //     let newPost = {
//     //         id: 5,
//     //         post: this._state.profilePage.newPostText,
//     //         likecounts: 0
//     //     };
//     //     this._state.profilePage.posts.push(newPost);
//     //     this._state.profilePage.newPostText = '';
//     //     this._callSubscriber(this._state);
//     // },
//     // updateNewPostText(newText) {
//     //     this._state.profilePage.newPostText = newText;
//     //     this._callSubscriber(this._state);
//     // },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action);

//         this._callSubscriber(this._state);
//         // if (action.type === ADD_POST) {
//         //     let newPost = {
//         //         id: 5,
//         //         post: this._state.profilePage.newPostText,
//         //         likecounts: 0
//         //     };
//         //     this._state.profilePage.posts.push(newPost);
//         //     this._state.profilePage.newPostText = '';
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         //     this._state.profilePage.newPostText = action.newText;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         //     this._state.messagesPage.newMessageBody = action.body;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === SEND_MESSAGE) {
//         //     let body = this._state.messagesPage.newMessageBody;
//         //     this._state.messagesPage.newMessageBody = ''
//         //     this._state.messagesPage.messages.push({ id: 6, message: body });
//         //     this._callSubscriber(this._state);
//         // }
//     }
// }

// export const addPostActionCreator = () => ({ type: ADD_POST })

// export const updateNewPostTextActionCreator = (text) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// })
// export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

// export const updateNewMessageBodyCreator = (body) => ({
//     type: UPDATE_NEW_MESSAGE_BODY,
//     body: body
// })


// let rerenderEntireTree = () => {
// console.log ('State is changed!')
// }

// let state = {

//     messagesPage: {
//         dialogs: [
//             { id: 1, name: 'Natalia' },
//             { id: 2, name: 'Vlad' },
//             { id: 3, name: 'Viktor' },
//             { id: 4, name: 'Gleb' },
//             { id: 5, name: 'Anfisa' },
//             { id: 6, name: 'Irina' },
//             { id: 7, name: 'Ruslan' }
//         ],
//         messages: [
//             { id: 1, message: "Hello." },
//             { id: 2, message: "How are you?" },
//             { id: 3, message: "Learn React?" },
//             { id: 4, message: "And Redux?" },
//             { id: 5, message: "Yo!" }
//         ],
//         newMessageText: 'Hello!'
//     },
//     profilePage: {
//         posts: [
//             { id: 1, post: "Hello, how are you?", likecounts: 11 },
//             { id: 2, post: "It`s my first post", likecounts: 23 }
//         ],
//         newPostText: 'It-kamasutra.com'
//     },
//     sideBar: {
//         friendsOnline: [
//             { id: 1, name: 'Natalia' },
//             { id: 2, name: 'Vlad' },
//             { id: 3, name: 'Viktor' }
//         ]
//     },
// }

// export const addMessage = () => {
//     let newMessage = {
//         id: 6,
//         message: state.messagesPage.newMessageText ,
//     };
//     state.messagesPage.messages.push(newMessage);
//     state.messagesPage.newMessageText = '';
//     rerenderEntireTree(state);
// }
// export const updateNewMessageText = (newMessageText) => {
//     state.messagesPage.newMessageText = newMessageText;
//     rerenderEntireTree(state);
// }
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         post: state.profilePage.newPostText ,
//         likecounts: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;  // observer
// // }

// export default store;
// window.store = store;