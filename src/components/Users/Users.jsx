import * as axios from "axios";
import React from "react";
import style from './Users.module.css'
import userPhoto from './../../photos/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        alert('Объект создан');
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return <div>
            {/* <button onClick={getUsers}>Get Users</button> */}
            {
                this.props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small
                                : userPhoto} className={style.avatar} /></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        {/* <div>{u.location.country}</div> */}
                        {/* <div>{u.location.city}</div> */}
                    </div>
                </div>)
            }
        </div>
    }
}

export default Users