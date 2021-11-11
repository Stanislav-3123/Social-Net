import React from 'react';
import s from './News.module.css';



const News = (props) => {
    return (

        <div className={s.dialogs}>
            <div>
              My News
            </div>
            <div>
                Friends News
            </div>
        </div>
    );
}


export default News;