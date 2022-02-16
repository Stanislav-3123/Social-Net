import React from 'react';
import style from './Users.module.css';
import PaginatorTest from '../../common/Paginator/PaginatorTest';
import User from './User';

let Users = ({ currentPage, onPageChange, totalUsersCount, pageSize, users, followingInProgress, unfollow, follow, ...props }) => {
	return <div className={style.wrapper}>
		<PaginatorTest currentPage={currentPage} onPageChange={onPageChange}
			totalUsersCount={totalUsersCount} pageSize={pageSize} />
		<div>{users.map(u => <User key={u.id}
			user={u}
			followingInProgress={followingInProgress}
			follow={follow}
			unfollow={unfollow} />
		)}</div>
	</div>
}

export default Users;