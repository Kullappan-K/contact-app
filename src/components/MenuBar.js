import React from 'react';

import UserList from './UserList';

import './Home.css';

const MenuBar = ({name, contactList}) => {

    return(
        <div className="contact_menu_div">
              <div className="contact_menu_bar">
              <div className="contact_search"><i className=" search_pad fa fa-search"></i></div>
                  <div className="username">
                  <i className="icons_padding fa fa-plus"> Add</i>
                  <i className="icons_padding fa fa-envelope-o"></i>
                  {name} <i className="fa fa-caret-down"></i>
                  <i className=" icons_r_padding fa fa-bell-o"></i>
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
