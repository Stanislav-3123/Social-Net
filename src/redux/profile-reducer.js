const ADD_POST = 'ADD-POST' 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        posts: [
            { id: 1, post: "It`s my first post", likecounts: 11 },
            { id: 2, post: "Hello, how are you?", likecounts: 23 }
        ],
        newPostText: 'It-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likecounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         post: state.newPostText,
    //         likecounts: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
       
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
       
    // }

    // return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;