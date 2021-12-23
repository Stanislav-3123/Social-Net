import React from 'react';
import s from './Friends.module.css';
import FriendsOnline from './FriendsOnline/FriendsOnline';





const Friends = (props) => {

    let friendsOnlineElements =
        props.friendsOnline.map(f => <FriendsOnline id={f.id} name={f.name} />
        );

    return (
        <div className={s.friendsOnline}>
            <h2 className={s.head}>Friends</h2>
            {friendsOnlineElements}

        </div>
    );
}


export default Friends;