import React, { useEffect, useState } from 'react';
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
      <div className="contact_header">
      <div className="c_header">
      <i className="address_book fa fa-address-book-o fa-2x"></i>
      <div className="contact_header_div">
      <p className="contact">Contacts<br /><span className="welcome_note">Welcome to Contact page</span></p>
      </div>
      <p className="sort"><span className="welcome_note">Sort by :</span> Date Created</p><i className="fa fa-caret-down"></i>
      </div>
      <div className="c_search">
      <input type="text" className="contact_search_text" placeholder="search contacts"/><i className="search_field fa fa-search"></i>
      <button className="add_button" value="Add Contact">Add Contact</button>
      </div>
      </div>
          <div className="cf_content_container">
              <div className="cf_content_card">
                  <div className="cf_content_header">
                      <i className="grid_header fa fa-plus"></i>
                      <p className="grid_header_basic">Basic Info</p>
                      <p className="grid_header_company">Company</p>
                  </div>
                      <ContactList contactList={contact}/>
              </div>
          </div>
          <span className="contact_display">
              <div className="contact_edit_header">
              <div className="contact_edit_img round_add"></div>
              </div>
              <div className="contact_edit_header_name">
              <p className="col_h_name">{name}</p>
              <p className="col_h_email">{name}@gmail.com</p>
              </div>
              <div className="contact_name">
                  <p className="textbox">Fullname:</p><p className="text_out">{name}</p>
                  <p className="textbox">Email:</p><p className="text_out">{name}@gmail.com</p>
                  <p className="textbox">Phone:</p><p className="text_out">+91 1234567890</p>
                  <p className="textbox">Company:</p><p className="text_out">ABC LLC</p>
                  <p className="textbox">Address:</p><p className="text_out">442, 3rd Cross Street, Chennai</p>
              </div>
            </span>
      </div>
      </div>
  </div>
    )
}
export default Home;