import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import './Home.css';

import TitleData from './Title';
import MessagesHandler from './HandlerMessages';
import ChatHandler from './ChatHandler';
import MenuBar from './MenuBar';
import Sidemenu from './Sidemenu';
import ContactList from './ContactList';
import ChatContactList from './ChatContactList';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [active, setActiveUser] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    var contactList = ['Alex', 'Harris', 'Josh', 'Michael', 'John', 'Chris'];

    function removeStaticUser(contactList, name){
        return contactList.filter((value) => {
            return name !== value;
        });
    }

    const SERVER = 'localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(SERVER);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, (data)=> {
            setActiveUser(data);
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
    if(active !== undefined){
    contactList = removeStaticUser(contactList, name);
    console.log(contactList);
    }

    return(
        <div>
        <div className="menu_container">
        <div className="sidemenu_div">
        <Sidemenu name={name}/>
        </div>
        <MenuBar name={name} contactList={contactList}/>
        </div>
        
        <div className="contact_content_container">
              <div className="contact_content_card">
                  <div className="contact_content_header">
                      <h3>Contacts</h3>
                  </div>
                      <ChatContactList contactList={contactList} />
              </div>
          </div>
        <span className="chat_main">
        <div className="outerContainer">
        <div className="container">
        <TitleData room={name} />
        <MessagesHandler messages={messages} name={name}/>
        <ChatHandler message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
        </div>
        </span>
        </div>
    )
}
export default Chat;