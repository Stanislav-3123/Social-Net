import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = (props) => {
	let navStyle = navData => navData.isActive ? s.active : s.item
	return (
		<div className={s.navbar}>
			<div >
				<NavLink to="/profile" className={navStyle}>Profile</NavLink>
			</div>
			<div >
				<NavLink to="/users" className={navStyle}>Users</NavLink>
			</div>
			<div >
				<NavLink to="/dialogs" className={navStyle}>Messages</NavLink>
			</div>
			<div >
				<NavLink to="/music" className={navStyle}>Music</NavLink>
			</div>
			<div >
				<NavLink to="/news" className={navStyle}>News</NavLink>
			</div>
			<div >
				<NavLink to="/settings" className={navStyle}>Settings</NavLink>
			</div>
			<div>
				<FriendsContainer />
			</div>
		</div>
	);
}

export default Navbar;