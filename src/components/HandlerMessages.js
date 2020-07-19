import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import MessageHandler from './HandlerMessage';

import './HandlerMessages.css'

const MessagesHandler = ({messages, name}) => {
    return(
    <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><MessageHandler message={message} name={name}></MessageHandler></div>)}
    </ScrollToBottom>
    )
}

export default MessagesHandler;