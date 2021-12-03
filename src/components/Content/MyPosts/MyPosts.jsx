import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    return (
        <div className={s.itemAll}>
            <div className={s.item}>
                <h3>My Posts</h3>
            </div>
            <div className={s.item}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.item}>
                <Post message="Hello, how are you?" likecounts=" 10" />
                <Post message="It`s my first post" likecounts=" 15" />
            </div>
        </div>
    );
}


export default MyPosts;