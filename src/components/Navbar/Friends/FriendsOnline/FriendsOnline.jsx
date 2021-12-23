import React from 'react';
import s from './FriendsOnline.module.css';





const FriendsOnline = (props) => {
    
    return (
        <div className={s.friendsOnline}>
            
            <img src='https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg'></img>
               <div className={s.FriendName}>{props.name}</div>
        </div>
    );
}


export default FriendsOnline;