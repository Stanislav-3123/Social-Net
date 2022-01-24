import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReduser from './auth-reduser'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReduser
});

let store = createStore(reducers);

window.store = store;

export default store;