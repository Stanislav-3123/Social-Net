import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';





const Navbar = (props) => {
    return (

        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/content" activeClassName="active">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messeges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>

    );
}


export default Navbar;