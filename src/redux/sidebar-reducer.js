import { friendsAPI } from "../api/api";

const SET_FOLLOWED_USERS = 'SET_FOLLOWED_USERS'

let initialState = {
	friendsOnline: [
		{ id: 1, name: 'Natalia' },
		{ id: 2, name: 'Vlad' },
		{ id: 3, name: 'Viktor' },
		{ id: 4, name: 'Gleb' },
		{ id: 5, name: 'Anfisa' },
		{ id: 6, name: 'Irina' }
	],
	followedUsers: []
};
const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FOLLOWED_USERS: {
			return {
				...state,
				followedUsers: action.followedUsers
			}
		}
		default: {
			return state;
		}
	}
}
export const setFollowedUsers = (followedUsers) => ({ type: SET_FOLLOWED_USERS, followedUsers })
export const getFollowedUsers = () => {
	return (dispatch) => {
		friendsAPI.getMyFriends().then(data => {
			dispatch(setFollowedUsers(data.items));
		});
	}
}



export default sidebarReducer;