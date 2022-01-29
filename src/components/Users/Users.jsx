import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../accepts/photos/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
	debugger;
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div>
		<div className={style.pages}>
			{pages.map(p => {
				return <span className={props.currentPage === p && style.selectedPage}
					onClick={(e) => { props.onPageChange(p); }}>{p}</span>
			})}
		</div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto}
								className={style.avatar} />
						</NavLink>
					</div>
					<div>
						{u.followed
							? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
								props.unfollow(u.id)
								debugger;
								// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
								// 	withCredentials: true,
								// 	headers: {
								// 		"API-KEY": "5fed59e2-86db-4015-9eef-7078801ec907"
								// 	}
								// })
							}}>Unfollow</button>
							: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Follow</button>}
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

export default Users;