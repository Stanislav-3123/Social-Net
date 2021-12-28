import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
           // updateNewPostText={props.updateNewPostText}
            newPostText={props.profilePage.newPostText}
            profilePage={props.profilePage}
            posts={props.posts} 
            dispatch={props.dispatch}
            //addPost={props.addPost}
            />
        </div>
    );
}


export default Profile;