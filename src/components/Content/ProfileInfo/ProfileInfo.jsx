import React from 'react';
import s from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainImg}>
                <img src='https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg'></img>
            </div>
            <div className={s.item}>
                Ava + description
            </div>
        </div>
    );
}


export default ProfileInfo;