import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText} />
//             }
//             }
//         </StoreContext.Consumer>);
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            updateNewPostText: (text) => {
                let action = updateNewPostTextActionCreator(text);
                dispatch(action);
            },
            addPost: () => {
                dispatch(addPostActionCreator());
            }
        } 
    }
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

    // let state = props.store.getState();


    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }

    // let onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text);
    //     props.store.dispatch(action);
    // }
