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
                News
            </div>
            <div className={s.item}>
                Music
            </div>
            <div className={s.item}>
                Settings
            </div>
        </div>

    );
}


export default Navbar;