import React from "react";
import style from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} className={style.avatar} /></div>
                    <div>
                        {u.folloved
                            ? <button onClick={() => { props.follow(u.id) }}>Followed</button>
                            : <button onClick={() => { props.unfollow(u.id) }}>Unfollowed</button>}
                    </div>
                </span>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.country}</div>
                    <div>{u.city}</div>
                </div>
            </div>)
        }
    </div>
};

export default Users