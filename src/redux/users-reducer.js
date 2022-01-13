const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
let initialState = {
    users: [
        {
            id: 1,
            avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            followed: true, 
            fullName: "Stanislav",
            status: "Learning React",
            location: { country: "Ukraine", city: "Donetsk" }
        },
        {
            id: 2,
            avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            followed: false, 
            fullName: "Stanislav",
            status: "Learning React",
            location: { country: "Ukraine", city: "Donetsk" }
        },
        {
            id: 3,
            avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            followed: true, 
            fullName: "Stanislav",
            status: "Learning React",
            location: { country: "Ukraine", city: "Donetsk" }
        },
        {
            id: 4,
            avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            followed: false, 
            fullName: "Stanislav",
            status: "Learning React",
            location: { country: "Ukraine", city: "Donetsk" }
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u; 
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u; 
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state, 
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;