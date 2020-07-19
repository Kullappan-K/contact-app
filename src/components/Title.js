import React from 'react';
import './Title.css'

const TitleData = ({room}) => {
    return(
    <div className="title">
    <div className="leftContainer">
    <h3>{room}</h3>
    </div>
    <div className="rightContainer">
    <a href="/"></a>
    </div>
    </div>
    );
}

export default TitleData;