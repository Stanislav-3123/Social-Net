import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
	posts: [
		{ id: 1, post: "It`s my first post", likecounts: 11 },
		{ id: 2, post: "Hello, how are you?", likecounts: 23 }
	],
	newPostText: 'It-kamasutra.com',
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				post: state.newPostText,
				likecounts: 0
			};
			return {
				...state, posts: [...state.posts, newPost], newPostText: ''
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state, newPostText: action.newText
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			};
		}
		case SET_USER_STATUS: {
			return {
				...state, status: action.status
			};
		}
		default:
			return state;
	}
}

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});
}
export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			debugger;
			dispatch(setUserStatus(response.data));
		});
}
export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserStatus(status));
			}

		});
}
export default profileReducer;