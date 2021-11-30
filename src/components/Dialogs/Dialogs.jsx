import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Natalia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Gleb</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Anfisa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Irina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs">Ruslan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, nice to meet you!
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Good luck!
                </div>
            </div>
        </div>
    );
}


export default Dialogs;