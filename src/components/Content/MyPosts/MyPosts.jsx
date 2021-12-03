import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let PostData = [
        {id: 1, post: "Hello, how are you?", likecounts: 11 },
        {id: 2, post: "It`s my first post", likecounts: 15 }
    ]
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
                <Post message={PostData[0].post} likecounts={PostData[0].likecounts} />
                <Post message={PostData[1].post} likecounts={PostData[1].likecounts} />
            </div>
        </div>
    );
}


export default MyPosts;