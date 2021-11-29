import React from 'react';
import s from './Content.module.css';
import Post from './Post/Post';



const Content = () => {
    return (

        <div>
            <div className={s.mainImg}>
                <img src='https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg'></img>
            </div>
            <div className={s.item}>
                Ava + description
            </div>
            <div className={s.item}>
                My Posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="Hello, how are you?" likecounts=" 10" />
                <Post message="It`s my first post" likecounts=" 15" />
            </div>

        </div>
    );
}


export default Content;