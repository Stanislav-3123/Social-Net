import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';

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

