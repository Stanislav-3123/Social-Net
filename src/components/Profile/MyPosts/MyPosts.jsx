import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let myPostsElements =
        props.posts.map(p => <Post message={p.post} likecounts={p.likecounts} />
        );
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // newPostText(text);
    }
    
    
    return (
        <div className={s.itemAll}>
            <div className={s.item}>
                <h3>My Posts</h3>
            </div>
            <div className={s.item}>
                <div>
                    <textarea 
                    onChange={ onPostChange } 
                    ref={newPostElement} placeholder="New___post" 
                    // value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.item}>
                {myPostsElements}
            </div>
        </div>
    );
}


export default MyPosts;