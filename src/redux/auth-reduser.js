import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	login: null,
	email: null,
	id: null,
	isAuth: false,
	isFetching: false
};

const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		default:
			return state;
	}
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const getAuthUserData = () => (dispatch) => {
	authAPI.me()
		.then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login, } = response.data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		});
}
export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {

		}
	});
}
export const logout = () => (dispatch) => {
	authAPI.logout()
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false));
			}
		});
}

export default authReduser;