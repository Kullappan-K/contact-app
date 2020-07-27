import React, { useState } from 'react';

const ContactList =({contactList}) => {

    return(
    <div className="c_column">
    {contactList.map( (contact, index) =>(
    <div key={index} className="row">
        <img className="round"/>
        <h5 className="col_name">{contact}</h5>
        <p className="col_email">{contact.trim().toLowerCase()}@gmail.com</p>
        <button className="col_edit fa fa-pencil"></button>
        <button className="col_chat fa fa-comments-o"></button>
        <button className="col_view fa fa-eye"></button>
    </div>
    ))}
</div>
    )

}
export default ContactList;