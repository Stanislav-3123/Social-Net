import * as axios from "axios";
import React from "react";
import style from './Users.module.css'
import userPhoto from './../../photos/user.png'

let Users = (props) => {
    if (props.usersPage.length === 0) {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            debugger;
            props.setUsers(response.data.items);
        });

        // props.setUsers( [
        //         {
        //             id: 1,
        //             avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        //             followed: true, 
        //             fullName: "Stanislav",
        //             status: "Learning React",
        //             location: { country: "Ukraine", city: "Donetsk" }
        //         },
        //         {
        //             id: 2,
        //             avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        //             followed: false, 
        //             fullName: "Stanislav",
        //             status: "Learning React",
        //             location: { country: "Ukraine", city: "Donetsk" }
        //         },
        //         {
        //             id: 3,
        //             avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        //             followed: true, 
        //             fullName: "Stanislav",
        //             status: "Learning React",
        //             location: { country: "Ukraine", city: "Donetsk" }
        //         },
        //         {
        //             id: 4,
        //             avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        //             followed: false, 
        //             fullName: "Stanislav",
        //             status: "Learning React",
        //             location: { country: "Ukraine", city: "Donetsk" }
        //         },
        //     ]
        // )
    }
    return <div>
        {
            props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small 
                            : userPhoto } className={style.avatar} /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
};

export default Users