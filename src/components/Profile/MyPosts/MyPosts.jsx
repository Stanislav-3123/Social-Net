import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, 
    updateNewPostTextActionCreator } from './../../../redux/state'

const MyPosts = (props) => {


    let myPostsElements =
        props.posts.map(p => <Post message={p.post} likecounts={p.likecounts} />
        );
    let newPostElement = React.createRef();
    debugger;
    let addPost = () => {
       // props.addPost();
       props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
       //  props.updateNewPostText(text);
       props.dispatch(updateNewPostTextActionCreator(text));
    }


    return (
        <div className={s.itemAll}>
            <div className={s.item}>
                <h3>My Posts</h3>
            </div>
            <div className={s.item}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement} 
                        placeholder="New post"
                        value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.itemPosts}>
                {myPostsElements}
            </div>
        </div>
    );
}


export default MyPosts;