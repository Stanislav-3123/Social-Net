import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
    return (
        <div className={s.item}>
            {/* <img src='https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg'></img> */}
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg'></img>
            { props.message }
            <div>
                <span>
                    Like
                    { props.likecounts}
                </span>
            </div>            
        </div>
    );
}


export default Post;