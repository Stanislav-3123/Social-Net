import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import style from './ProfileInfo.module.css';
import gitHubIcon from './../../../accepts/photos/giHubIcon.png';
import vkLogo from './../../../accepts/photos/vkLogo.svg';
import faceBookIcon from './../../../accepts/photos/faceBookIcon.png';
import instagramIcon from './../../../accepts/photos/instagramIcon.png';
import twitterIcon from './../../../accepts/photos/twitterIcon.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={style.mainImg}>
                <img src='https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg'></img>
            </div>
            <div className={style.item}>
                <div><h3>{props.profile.fullName}</h3></div>
                <img src={props.profile.photos.large} />
                <div>{props.profile.lookingForAJob != false ? 'Looking for a job' : 'I have a job'}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div className={style.contacts}>
                    <h3>Контакты :</h3>
                    <div>
                        <img src={gitHubIcon} className={style.contactItems} />
                        {props.profile.contacts.github}</div>
                    <div>
                        <img src={vkLogo} className={style.contactItems} />
                        {props.profile.contacts.vk}</div>
                    <div>
                        <img src={faceBookIcon} className={style.contactItems} />
                        {props.profile.contacts.facebook}</div>
                    <div>
                        <img src={instagramIcon} className={style.contactItems} />
                        {props.profile.contacts.instagram}</div>
                    <div>
                        <img src={twitterIcon} className={style.contactItems} />
                        {props.profile.contacts.twitter}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;