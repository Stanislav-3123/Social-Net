import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../accepts/photos/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, follow, unfollow }) => {
	return <div>
		<span>
			<div>
				<NavLink to={'/profile/' + user.id}>
					<img alt="img" src={user.photos.small != null ? user.photos.small : userPhoto}
						className={style.avatar} />
				</NavLink>
			</div>
			<div>
				{user.followed
					? <button className={style.followButton}
						disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => {
							unfollow(user.id)
						}}>unfollow</button>
					: <button className={style.followButton}
						disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => { follow(user.id) }}>Follow</button>}
			</div>
		</span>
		<div>
			<div>{user.name}</div>
			<div>{user.status}</div>
		</div>
	</div>
}

export default User;