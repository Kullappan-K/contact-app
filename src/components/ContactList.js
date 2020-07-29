import React, { useState } from 'react';

const ContactList =({contactList}) => {

    return(
    <div className="c_column">
    {contactList.map( (contact, index) =>(
    <div key={index} className="row">
        <input className="checkbox_type" type="checkbox"></input>
        <div className="contact_basic_info">
        <img className="round"/>
        <span className="col_name">{contact} <br/><span className="col_email">{contact.trim().toLowerCase()}@gmail.com</span></span>
        </div>
        <div className="col_company">ABC LLC</div>
    </div>
    ))}
</div>
    )

}
export default ContactList;