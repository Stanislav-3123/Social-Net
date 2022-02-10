import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import style from './ProfileInfo.module.css';
import gitHubIcon from './../../../accepts/photos/giHubIcon.png';
import vkLogo from './../../../accepts/photos/vkLogo.svg';
import faceBookIcon from './../../../accepts/photos/faceBookIcon.png';
import instagramIcon from './../../../accepts/photos/instagramIcon.png';
import twitterIcon from './../../../accepts/photos/twitterIcon.png';
import userPhoto from './../../../accepts/photos/user.png'
import ProfileStatusHook from './ProfileStatus/ProfileSatusHook';

const ProfileInfo = (props) => {
	debugger
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/* <div className={style.mainImg}>
				<img src='https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg'></img>
			</div> */}
			<div className={style.item}>
				<div><h3>{props.profile.fullName}</h3></div>
				<img alt='userPhoto' className={style.userPhoto}
					src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
				<ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
				<div>{props.profile.lookingForAJob !== false ? 'Looking for a job' : 'I have a job'}</div>
				<div>{props.profile.lookingForAJobDescription}</div>
				<div className={style.contacts}>
					<h3>Контакты :</h3>
					<div>
						{props.profile.contacts.github != null ? <img alt='icon' src={gitHubIcon} className={style.contactItems} /> : null}
						{props.profile.contacts.github}</div>
					<div>
						{props.profile.contacts.vk != null ? <img alt='icon' src={vkLogo} className={style.contactItems} /> : <span></span>}
						{props.profile.contacts.vk}</div>
					<div>
						{props.profile.contacts.facebook != null ? <img alt='icon' src={faceBookIcon} className={style.contactItems} /> : <span></span>}
						{props.profile.contacts.facebook}</div>
					<div>
						{props.profile.contacts.instagram != null ? <img alt='icon' src={instagramIcon} className={style.contactItems} /> : <span></span>}
						{props.profile.contacts.instagram}</div>
					<div>
						{props.profile.contacts.twitter != null ? <img alt='icon' src={twitterIcon} className={style.contactItems} /> : <span></span>}
						{props.profile.contacts.twitter}</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;