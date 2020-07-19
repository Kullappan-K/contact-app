import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import TitleData from './Title';
import MessagesHandler from './HandlerMessages';
import ChatHandler from './ChatHandler';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const SERVER = 'http://Kullappan-K.github.io/contact-sever';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(SERVER);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, ()=> {

        });

        return() => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [SERVER, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''));
        }
    };

    return(
        <div className="outerContainer">
        <div className="container">
        <TitleData room={name} />
        <MessagesHandler messages={messages} name={name}/>
        <ChatHandler message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
        </div>
    )
}

export default Chat;