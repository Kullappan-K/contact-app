import React from 'react';

import './ChatHandler.css';

const ChatHandler = ({message, setMessage, sendMessage}) => {
    return(
    <div className="form">
        <input className="input"  placeholder="Messages" type="text" value={message} onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}></input>
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        </div>
    );
}

export default ChatHandler;