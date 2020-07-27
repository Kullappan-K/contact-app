import React, { useEffect, useState, Component, useLayoutEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Sidemenu from './Sidemenu';
import ContactList from './ContactList';

import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import MenuBar from './MenuBar';

let socket;
let contactList = [];

const Home = ({location}) => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState([]);
    const SERVER = 'localhost:5000';
    
    useEffect(() => {
        const {name} = queryString.parse(location.search);

        socket = io(SERVER);
        setName(name);

        socket.emit('getAllUser', {name},(data)=> {
            setContact(data);
        });
        return() => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [SERVER, location.search]);

    useEffect(() => {

        socket.emit('getAllUser', {name},(data)=> {
            setContact(data);
        });

    }, [contact, location.search]);

    return(
        <div>
        <div className="menu_container">
        <div className="sidemenu_div">
        <Sidemenu name={name}/>
        </div>
        <MenuBar name={name} contactList={contact} />
        </div>
        <div className="contact_container">
      <div className="contact_list_div">
          <div className="cf_content_container">
              <div className="cf_content_card">
                  <div className="cf_content_header">
                      <h3>Contacts</h3>
                  </div>
                      <ContactList contactList={contact}/>
              </div>
          </div>
          <span className="contact_display">
              <div className="contact_edit_img round_add"></div>
              <div className="contact_name">
                  <input type="text" className="textbox" placeholder="Contact Name" required/>
                  <input type="text" className="textbox" placeholder="Phone Number" required/>
                  <input type="text" className="textbox" placeholder="Email" required/>
                  <input type="text" className="textbox" placeholder="Address" required/>
                  <button className="save_button out">Save</button>
                  <button className="save_button out">Cancel</button>
              </div>
            </span>
      </div>
  </div>
  </div>
    )
}
export default Home;