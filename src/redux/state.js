let rerenderEntireTree = () => {
console.log ('State is changed!')
}

let state = {

    messagesPage: {
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
        newMessageText: 'Hello!'
    },
    profilePage: {
        posts: [
            { id: 1, post: "Hello, how are you?", likecounts: 11 },
            { id: 2, post: "It`s my first post", likecounts: 23 }
        ],
        newPostText: 'It-kamasutra.com'
    },
    sideBar: {
        friendsOnline: [
            { id: 1, name: 'Natalia' },
            { id: 2, name: 'Vlad' },
            { id: 3, name: 'Viktor' }
        ]
    }
}
window.state = state;
export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText ,
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree();
}
export const updateNewMessageText = (newMessageText) => {
    state.messagesPage.newMessageText = newMessageText;
    rerenderEntireTree();
}
export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText ,
        likecounts: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // observer
}

export default state;