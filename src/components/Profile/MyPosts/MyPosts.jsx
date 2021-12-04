import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let myPostsElements = 
    props.posts.map ( p => <Post message={p.post} likecounts={p.likecounts} />
        );
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
               {myPostsElements}
            </div>
        </div>
    );
}


export default MyPosts;