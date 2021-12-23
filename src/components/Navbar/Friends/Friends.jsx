import React from 'react';
import s from './Friends.module.css';





const Friends = (props) => {
    return (
        <div className={s.friendsOnline}>
            <h2 className={s.head}>Friends</h2>
            <img src='https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg'></img>

        </div>
    );
}


export default Friends;