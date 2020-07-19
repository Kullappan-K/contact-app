import React from 'react';

import './HandlerMessage.css'

const MessageHandler = ({message : {text, user}, name}) => {
    let isCurrentUsr = false;

    const currentName = name.trim().toLowerCase();

    if(user === currentName){
        isCurrentUsr = true;
    }
    return (
        isCurrentUsr ? (
            <div className="msgContainer end">
            <p className="sentText">{currentName}</p>
            <div className="msgBox red">
            <p className="msgtext">{text}</p>
            </div>
            </div>
        ):(
            <div className="msgContainer start">
            <p className="sentText">{user}</p>
            <div className="msgBox light">
            <p className="msgtext">{text}</p>
            </div>
            </div>
        )
    );
}

export default MessageHandler;