import React from 'react';
import loading from './../../accepts/photos/loading.svg';

let Preloader = (props) => {
    return <div>
        <img src={loading} />
    </div>
}

export default Preloader