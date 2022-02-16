import React from 'react';
import style from './Users.module.css';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, onPageChange, totalUsersCount, pageSize, users, followingInProgress, unfollow, follow, ...props }) => {
	return <div className={style.wrapper}>
		<Paginator currentPage={currentPage} onPageChange={onPageChange}
			totalItemsCount={totalUsersCount} pageSize={pageSize} />
		<div className={style.userItems}>{users.map(u => <User key={u.id}
			user={u}
			followingInProgress={followingInProgress}
			follow={follow}
			unfollow={unfollow} />
		)}</div>
	</div>
}

export default Users;