import React from 'react';
import s from './Content.module.css';
import Post from './Post/Post';



const Content = () => {
    return (

        <div>
            <img src='https://i.ucrazy.ru/files/i/2007.6.22/polar_ice.jpg'></img>
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