import * as axios from "axios";
import React from "react";
import style from './Users.module.css'
import userPhoto from './../../photos/user.png'

class Users extends React.Component {
    componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
}

    onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.setUsers(response.data.items);
    });
}
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={style.pages}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && style.selectedPage}
                    onClick={(e) => { this.onPageChange(p); }}>{p}</span>
                })}
            </div>
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