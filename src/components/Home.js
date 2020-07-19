import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Dialog from './Dialog';

import './Home.css';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    function getInfo(){
          return(
              <Dialog />
          )
    };

    return(
        
        <div>
        <div className="contact_container">
      <div className="contact_menu_div">
          <div className="contact_menu_div">
          
              <div className="contact_menu_bar">
              <Dialog />
                  <div className="username">Hi, Alex <i className="fa fa-angle-down"></i>
                      <div className="drp-contact ">
                      <div className="list_remove">
                      <Link to={`/chat?name=${name}&room=1`} target="_blank" ><button  className="left" onMouseOver={(event) => {setName(event.target.textContent);setRoom(event.target.textContent);}}>Harris</button>
                          <button className="left" onMouseOver={(event) => {setName(event.target.textContent);}}>Josh</button>
                          </Link>
                      </div>	
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="contact_list_div">
          <div className="cf_content_container">
              <div className="cf_content_card">
                  <div className="cf_content_header">
                      <h3>Contacts</h3>
                  </div>
                      <div className="c_column">
                      <div className="row">
                          <img className="round"/>
                          <h5 className="col_name">Kullappan K</h5>
                          <p className="col_email">kullappan@gmail.com</p>
                          <button className="col_edit fa fa-pencil"></button>
                          <button className="col_chat fa fa-comments-o"></button>
                          <button className="col_view fa fa-eye"></button>
                      </div>
                  </div>
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
  <div className="contact_add">
      <button className="round add_button fa fa-plus"></button>
  </div>
  </div>
    )
}

export default Home;