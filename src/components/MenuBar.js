import React from 'react';

import UserList from './UserList';

import './Home.css';

const MenuBar = ({name, contactList}) => {

    return(
        <div className="contact_menu_div">
              <div className="contact_menu_bar">
                  <div className="username">Hi, {name} <i className="fa fa-angle-down"></i>
                      <div className="drp-contact">
                      <div className="list_remove">
                      <UserList name={name} contactList={contactList} />
                      </div>
                      </div>
                  </div>
              </div>
          </div>
    );
}

export default MenuBar;
