import React from 'react';
import s from './Navbar.module.css';





const Navbar = () => {
    return (

        <div className={s.navbar}>
            <div className={`${s.item} ${s.active}`}>
                <a href="/content">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Messeges</a>
            </div>
            <div className={s.item}>
                <a href="/music">Music</a>
            </div>
            <div className={s.item}>
                <a href="/news">News</a>
            </div>
            <div className={s.item}>
                <a href="/settings">Settings</a>
            </div>
        </div>

    );
}


export default Navbar;