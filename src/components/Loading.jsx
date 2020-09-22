import React from 'react';
import loading from "../assets/icons/loading.svg";

const Loading = () => {
    return (
        <div>
            <img src={loading} alt=""/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading;
