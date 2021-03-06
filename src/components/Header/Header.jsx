import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import userPhoto from './../../accepts/photos/user.png';
import { Button } from 'antd';

const Header = (props) => {
	return (
		<header className={style.header}>
			<img alt='img' src='https://i.pinimg.com/originals/d3/73/08/d37308d557d5feac1828114327840f3d.jpg'></img>
			<div className={style.loginBlock}>
				<img alt='img' src={userPhoto} />
				{props.isAuth
					? <div>{props.login} - <Button onClick={props.logout} type="primary" danger>Log out</Button></div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}


export default Header;