import React from 'react';
import s from './Friends.module.css';
import FriendsOnline from './FriendsOnline/FriendsOnline';

const Friends = (props) => {
	let followedElements =
		props.followedUsers.map(f => <FriendsOnline key={f.key} id={f.id} name={f.name} />
		);
	return (
		<div className={s.friendsOnline}>
			<h2 className={s.head}>Friends:</h2>
			<div className={s.friendsItems}>
				{followedElements}
			</div>
		</div>
	);
}

export default Friends;